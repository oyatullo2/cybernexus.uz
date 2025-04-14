import classNames from "classnames";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalState/globalstate";
import {
  FaTelegram,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaWhatsapp,
  FaYoutube,
  FaTiktok,
  FaTwitter, // FaXTwitter o‘rniga FaTwitter
  FaGlobe,
  FaMobileAlt, // Mobile app uchun yangi ikonka
} from "react-icons/fa";

export const Contact = () => {
  const { mode } = useContext(GlobalContext);

  // Marquee uchun ma'lumotlar va ikonka mapping
  const marqueeItems = [
    {
      text: "Web-site: cybernexus.uz",
      link: "https://cybernexus.uz",
      icon: <FaGlobe className="inline-block ml-2 text-blue-500" />,
    },
    {
      text: "Channel: @cyber_nexuss",
      link: "https://t.me/cyber_nexuss",
      icon: <FaTelegram className="inline-block ml-2 text-blue-400" />,
    },
    {
      text: "Chat: @cybernexus_chat",
      link: "https://t.me/cybernexus_chat",
      icon: <FaTelegram className="inline-block ml-2 text-blue-400" />,
    },
    {
      text: "Bot: @cybernexuss_bot",
      link: "https://t.me/cybernexuss_bot",
      icon: <FaTelegram className="inline-block ml-2 text-blue-400" />,
    },
    {
      text: "YouTube: @cyber_nexuss",
      link: "https://youtube.com/@cybernexuss?si=IN776e9_NqHBb0A3",
      icon: <FaYoutube className="inline-block ml-2 text-red-600" />,
    },
    {
      text: "Instagram: @cyber_nexuss",
      link: "https://instagram.com/cybernexus.uz",
      icon: <FaInstagram className="inline-block ml-2 text-pink-500" />,
    },
    {
      text: "Tiktok: @cyber_nexuss",
      link: "https://www.tiktok.com/@cyber.nexuss?_t=ZS-8us03V8s29Y&_r=1",
      icon: <FaTiktok className="inline-block ml-2 text-black" />,
    },
    {
      text: "X: @cyber_nexuss",
      link: "https://x.com/cyber_nexuss?t=l6IO3T3Y60C1ayUcT0MPfw&s=09",
      icon: <FaTwitter className="inline-block ml-2 text-blue-600" />, // X uchun Twitter ikonkasi
    },
    {
      text: "Mobile app: download",
      link: "https://t.me/cyber_nexuss/75",
      icon: <FaMobileAlt className="inline-block ml-2 text-green-500" />, // Mobile app uchun ikonka
    },
  ];

  return (
    <>
      <div className="w-full mt-[-50px] px-[10px] animate-[header-top-animation_1.5s_ease-in-out] flex flex-col items-center max-w-full h-screen overflow-hidden justify-center relative">
        <h2
          className={classNames("text-3xl font-bold mb-8", {
            "text-white": mode === "dark",
            "text-gray-800": mode === "light",
          })}
        >
          Contact Me
        </h2>
        <div
          className={classNames(
            "w-full max-w-lg rounded-lg shadow-lg p-[20px] overflow-hidden",
            {
              "bg-gray-900 text-white": mode === "dark",
            },
            {
              "bg-white text-black": mode === "light",
            }
          )}
        >
          {/* Social Media Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://t.me/snovden_01"
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(
                "flex items-center space-x-2 sm:space-x-4 p-3 sm:p-4 rounded-md transition-colors",
                {
                  "bg-blue-50 hover:bg-blue-100 text-gray-700":
                    mode === "light",
                  "bg-blue-900 hover:bg-blue-800 text-white": mode === "dark",
                }
              )}
            >
              <FaTelegram className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 flex-shrink-0" />
              <span className="text-base sm:text-lg">Telegram</span>
            </a>
            <a
              href="https://instagram.com/cybernexus.uz"
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(
                "flex items-center space-x-2 sm:space-x-4 p-3 sm:p-4 rounded-md transition-colors",
                {
                  "bg-pink-50 hover:bg-pink-100 text-gray-700":
                    mode === "light",
                  "bg-pink-900 hover:bg-pink-800 text-white": mode === "dark",
                }
              )}
            >
              <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7 text-pink-500 flex-shrink-0" />
              <span className="text-base sm:text-lg">Instagram</span>
            </a>
            <a
              href="https://wa.me/+998935188508"
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(
                "flex items-center space-x-2 sm:space-x-4 p-3 sm:p-4 rounded-md transition-colors",
                {
                  "bg-green-100 hover:bg-green-200 text-gray-700":
                    mode === "light",
                  "bg-green-900 hover:bg-green-800 text-white": mode === "dark",
                }
              )}
            >
              <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 text-green-600 flex-shrink-0" />
              <span className="text-base sm:text-lg">WhatsApp</span>
            </a>
            <a
              href="tel:+998935188508"
              className={classNames(
                "flex items-center space-x-2 sm:space-x-4 p-3 sm:p-4 rounded-md transition-colors",
                {
                  "bg-green-50 hover:bg-green-100 text-gray-700":
                    mode === "light",
                  "bg-green-900 hover:bg-green-800 text-white": mode === "dark",
                }
              )}
            >
              <FaPhone className="w-6 h-6 sm:w-7 sm:h-7 text-green-500 flex-shrink-0" />
              <span className="text-base sm:text-lg">Phone</span>
            </a>
            <a
              href="mailto:izzatullayev008@gmail.com"
              className={classNames(
                "flex items-center space-x-2 sm:space-x-4 p-3 sm:p-4 rounded-md transition-colors",
                {
                  "bg-red-50 hover:bg-red-100 text-gray-700": mode === "light",
                  "bg-red-900 hover:bg-red-800 text-white": mode === "dark",
                }
              )}
            >
              <FaEnvelope className="w-6 h-6 sm:w-7 sm:h-7 text-red-500 flex-shrink-0" />
              <span className="text-base sm:text-lg">Email</span>
            </a>
            <a
              href="https://github.com/oyatullo2"
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(
                "flex items-center space-x-2 sm:space-x-4 p-3 sm:p-4 rounded-md transition-colors",
                {
                  "bg-gray-50 hover:bg-gray-100 text-gray-700":
                    mode === "light",
                  "bg-gray-700 hover:bg-gray-600 text-white": mode === "dark",
                }
              )}
            >
              <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800 flex-shrink-0" />
              <span className="text-base sm:text-lg">GitHub</span>
            </a>
          </div>
        </div>

        {/* Marquee qismi */}
        <div className="absolute bottom-0 w-full overflow-hidden marquee-container">
          <div
            className={classNames(
              "marquee flex whitespace-nowrap animate-marquee py-2 items-center justify-center",
            )}
          >
            {/* Salomlashuv va xabar */}
            <span
              className={classNames(
                "mx-4 text-sm sm:text-base font-semibold flex-shrink-0",
                {
                  "text-white": mode === "dark",
                  "text-gray-800": mode === "light",
                }
              )}
            >
              Bizning boshqa ijtimoiy tarmoqdagi manzillarimiz: <FaGlobe className="inline-block ml-2"/>
            </span>
            {/* Linklar */}
            {marqueeItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(
                  "mx-4 text-sm sm:text-base font-medium rounded-full px-3 py-1 transition-all duration-300 hover:scale-105",
                  {
                    "bg-blue-600 text-white hover:bg-blue-700": mode === "dark",
                    "bg-blue-100 text-blue-800 hover:bg-blue-200":
                      mode === "light",
                  }
                )}
              >
                {item.text} {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CSS animatsiya va style */}
      <style jsx>{`
        .marquee-container {
          position: absolute;
          bottom: 0; /* Kompyuterda pastda */
          width: 100%;
          overflow: hidden;
        }
        .marquee {
          display: flex;
          animation: marquee-desktop 30s linear infinite; /* Kompyuterda 30s */
        }
        @keyframes marquee-desktop {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .marquee:hover {
          animation-play-state: paused; /* Hover qilinganda to‘xtaydi */
        }

        /* Mobil uchun media query */
        @media (max-width: 640px) {
          .marquee-container {
            bottom: 25px; /* Telefonda teparoq */
          }
          .marquee {
            animation: marquee-mobile 10s linear infinite; /* Telefonda 20s */
          }
          @keyframes marquee-mobile {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        }
      `}</style>
    </>
  );
};