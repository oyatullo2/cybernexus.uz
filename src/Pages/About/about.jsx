import classNames from "classnames";
import { useContext, useState, useEffect, useRef } from "react";
import { GlobalContext } from "../../GlobalState/globalstate";
import { FaTelegram, FaInstagram, FaGithub } from "react-icons/fa";

export const About = () => {
  const { mode } = useContext(GlobalContext);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);
  const joinUsRef = useRef(null);

  // Tekstlarni desktop va mobil uchun alohida saqlash
  const desktopText1 = "Cyber Nexus, launched in 2025, is your go-to platform for cybersecurity news, apps, and Q&A. We aim to keep you safe in a fast-changing digital world.";
  const mobileText1 = "Cyber Nexus, launched in 2025, is your cybersecurity platform for news, apps, and Q&A.";
  
  const desktopText2 = "Cybersecurity protects systems and data from attacks, teaching skills to spot risks and stop threats. Our expert team is here to share knowledge and strengthen online safety.";
  const mobileText2 = "Cybersecurity protects systems and data, teaching risk detection. Our team shares knowledge for safety.";

  const desktopText3 = "Cyber Nexus is a hub for learning and discussion. Ask questions, follow our updates, and join free webinars to boost your cybersecurity know-how!";
  const mobileText3 = "Cyber Nexus is a hub for learning. Ask questions and join webinars to boost your skills!";

  // Mobil holatni aniqlash
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isPopoverOpen &&
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        joinUsRef.current &&
        !joinUsRef.current.contains(event.target)
      ) {
        setIsPopoverOpen(false); // To‘g‘ridan-to‘g‘ri yopish
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isPopoverOpen]);

  const handleMouseLeave = (event) => {
    const relatedTarget = event.relatedTarget;
    if (
      popoverRef.current &&
      !popoverRef.current.contains(relatedTarget) &&
      joinUsRef.current &&
      !joinUsRef.current.contains(relatedTarget)
    ) {
      setIsPopoverOpen(false);
    }
  };

  return (
    <div
      className={classNames(
        "w-full min-h-screen mt-[-50px] animate-[header-top-animation_1.5s_ease-in-out] flex flex-col items-center justify-center px-4 py-8 transition-colors duration-300",
        {}
      )}
    >
      {/* About Section */}
      <div
        className={classNames(
          "w-full max-w-3xl p-6 rounded-lg shadow-lg",
          {
            "bg-gray-800": mode === "dark",
            "bg-white": mode === "light",
          }
        )}
      >
        <h1
          className={classNames("text-3xl md:text-4xl font-bold mb-6 text-center", {
            "text-white": mode === "dark",
            "text-[#f04a4f]": mode === "light",
          })}
        >
          About Cyber Nexus
        </h1>

        <p
          className={classNames(
            "text-base md:text-lg leading-relaxed mb-4",
            {
              "text-gray-300": mode === "dark",
              "text-gray-700": mode === "light",
            }
          )}
        >
          {isMobile ? mobileText1 : desktopText1}
        </p>

        <p
          className={classNames(
            "text-base md:text-lg leading-relaxed mb-4",
            {
              "text-gray-300": mode === "dark",
              "text-gray-700": mode === "light",
            }
          )}
        >
          {isMobile ? mobileText2 : desktopText2}
        </p>

        <div className="relative transition-all ease-in-out duration-500 popover-container">
          {/* Popover */}
          {isPopoverOpen && (
            <div
              ref={popoverRef}
              className={classNames(
                "z-10 w-full mb-[20px] md:w-64 md:rounded-lg transition-all duration-500 ease-in-out p-4 rounded-tr-md rounded-tl-md shadow-lg",
                {
                  "absolute left-1/4 transform -translate-x-1/2 -top-24 md:left-1/4 md:-top-24": !window.matchMedia("(max-width: 767px)").matches, // Desktop
                  "fixed bottom-0 left-0 right-0 transition-transform duration-1000 ease-in-out": window.matchMedia("(max-width: 767px)").matches, // Mobil
                },
                {
                  "translate-y-0": window.matchMedia("(max-width: 767px)").matches && isPopoverOpen, // Mobil ochiq holat
                  "translate-y-full": window.matchMedia("(max-width: 767px)").matches && !isPopoverOpen, // Mobil yopiq holat
                },
                {
                  "bg-gray-700 text-white": mode === "dark",
                  "bg-white text-gray-900": mode === "light",
                }
              )}
              onMouseEnter={() => setIsPopoverOpen(true)}
            >
              <h3 className="text-lg font-semibold mb-3 text-center">Cyber Nexus</h3>
              <div className="flex justify-around">
                <a
                  href="https://t.me/snovden_01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                >
                  <FaTelegram className="w-6 h-6 text-[#0088cc] hover:text-[#006b9e]" />
                </a>
                <a
                  href="https://instagram.com/cybernexus.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                >
                  <FaInstagram
                    className="w-6 h-6"
                    style={{
                      background: "linear-gradient(to right, #f58529, #dd2a7b, #8134af)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                </a>
                <a
                  href="https://github.com/oyatullo2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                >
                  <FaGithub className="w-6 h-6 text-[#181717] hover:text-[#333]" />
                </a>
              </div>
            </div>
          )}

          <h2
            ref={joinUsRef}
            className="text-xl w-full max-w-fit md:text-2xl font-semibold mt-6 mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer"
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            onMouseEnter={() => setIsPopoverOpen(true)}
            onMouseLeave={handleMouseLeave}
          >
            Join Us!
          </h2>
        </div>

        <p
          className={classNames(
            "text-base md:text-lg leading-relaxed",
            {
              "text-gray-300": mode === "dark",
              "text-gray-700": mode === "light",
            }
          )}
        >
          {isMobile ? mobileText3 : desktopText3}
        </p>
      </div>

      {/* Footer */}
      <footer
        className={classNames(
          "mt-8 text-sm",
          {
            "text-gray-400": mode === "dark",
            "text-gray-600": mode === "light",
          }
        )}
      >
        © 2025 Cyber Nexus. All rights reserved.
      </footer>
    </div>
  );
};

export default About;