import classNames from "classnames";
import { useContext, useState, useEffect, useRef } from "react";
import { GlobalContext } from "../../GlobalState/globalstate";
import { FaTelegram, FaInstagram, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const About = () => {
  const { mode } = useContext(GlobalContext);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);
  const joinUsRef = useRef(null);

  const desktopText1 =
    "Cyber Nexus, launched in 2025, is your go-to platform for cybersecurity news, apps, and Q&A. We aim to keep you safe in a fast-changing digital world.";
  const mobileText1 =
    "Cyber Nexus, launched in 2025, is your cybersecurity platform for news, apps, and Q&A.";

  const desktopText2 =
    "Cybersecurity protects systems and data from attacks, teaching skills to spot risks and stop threats. Our expert team is here to share knowledge and strengthen online safety.";
  const mobileText2 =
    "Cybersecurity protects systems and data, teaching risk detection. Our team shares knowledge for safety.";

  const desktopText3 =
    "Cyber Nexus is a hub for learning and discussion. Ask questions, follow our updates, and join free webinars to boost your cybersecurity know-how!";
  const mobileText3 =
    "Cyber Nexus is a hub for learning. Ask questions and join webinars to boost your skills!";

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
        setIsPopoverOpen(false);
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

  // Typing effect for heading
  const headingText = "About Cyber Nexus";
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full min-h-screen bg-black font-mono text-neon-green px-4 sm:px-6 pt-6 pb-10 overflow-x-hidden relative">
      {/* Scanline background effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="scanline"></div>
      </div>

      <motion.div
        className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div
          className={classNames(
            "w-full p-6 rounded-lg border-2 border-neon-green bg-black bg-opacity-80 shadow-neon",
            "transition-all duration-300 relative z-10"
          )}
        >
          {/* Typing effect for heading */}
          <motion.h1
            className="text-3xl sm:text-4xl font-bold mb-6 text-center tracking-wider text-neon-green animate-pulse-glow"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            {headingText.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Paragraph 1 - Smooth slide-in */}
          <motion.p
            className="text-sm sm:text-base leading-relaxed mb-4 text-neon-green opacity-80"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
          >
            {isMobile ? mobileText1 : desktopText1}
          </motion.p>

          {/* Paragraph 2 - Smooth slide-in */}
          <motion.p
            className="text-sm sm:text-base leading-relaxed mb-4 text-neon-green opacity-80"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeInOut" }}
          >
            {isMobile ? mobileText2 : desktopText2}
          </motion.p>

          <div className="relative transition-all ease-in-out duration-500 popover-container">
            <AnimatePresence>
              {isPopoverOpen && (
                <motion.div
                  ref={popoverRef}
                  className={classNames(
                    "z-20 w-full mb-[20px] md:w-64 p-4 rounded-tr-md rounded-tl-md border-2 border-neon-blue bg-black bg-opacity-80 shadow-neon-blue",
                    {
                      "absolute left-1/2 transform -translate-x-1/2 -top-24 md:-top-24":
                        !isMobile,
                      "fixed bottom-0 left-0 right-0": isMobile,
                    }
                  )}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  onMouseEnter={() => setIsPopoverOpen(true)}
                >
                  <h3 className="text-lg font-semibold mb-3 text-center text-neon-green tracking-wide">
                    Cyber Nexus
                  </h3>
                  <div className="flex justify-around">
                    <motion.a
                      href="https://t.me/snovden_01"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <FaTelegram className="w-6 h-6 text-neon-blue hover:text-neon-green transition-colors duration-200" />
                    </motion.a>
                    <motion.a
                      href="https://instagram.com/cybernexus.uz"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <FaInstagram className="w-6 h-6 text-neon-blue hover:text-neon-green transition-colors duration-200" />
                    </motion.a>
                    <motion.a
                      href="https://github.com/oyatullo2"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <FaGithub className="w-6 h-6 text-neon-blue hover:text-neon-green transition-colors duration-200" />
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.h2
              ref={joinUsRef}
              className="text-xl md:text-2xl font-semibold mt-6 mb-3 bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent animate-pulse-glow"
              onClick={() => setIsPopoverOpen(!isPopoverOpen)}
              onMouseEnter={() => setIsPopoverOpen(true)}
              onMouseLeave={handleMouseLeave}
            >
              Join Us!
            </motion.h2>
          </div>

          {/* Paragraph 3 - Smooth slide-in */}
          <motion.p
            className="text-sm sm:text-base leading-relaxed text-neon-green opacity-80"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: "easeInOut" }}
          >
            {isMobile ? mobileText3 : desktopText3}
          </motion.p>
        </div>

        <motion.footer
          className="mt-8 text-sm text-neon-green opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          © 2025 Cyber Nexus. All rights reserved.
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default About;
