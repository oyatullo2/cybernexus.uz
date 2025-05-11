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
  FaTwitter,
  FaGlobe,
  FaMobileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

export const Contact = () => {
  const { mode } = useContext(GlobalContext);

  const marqueeItems = [
    {
      text: "Web-site: cybernexus.uz",
      link: "https://cybernexus.uz",
      icon: <FaGlobe className="inline-block ml-2 text-neon-blue" />,
    },
    {
      text: "Channel: @cyber_nexuss",
      link: "https://t.me/cyber_nexuss",
      icon: <FaTelegram className="inline-block ml-2 text-neon-blue" />,
    },
    {
      text: "Chat: @cybernexus_chat",
      link: "https://t.me/cybernexus_chat",
      icon: <FaTelegram className="inline-block ml-2 text-neon-blue" />,
    },
    {
      text: "Bot: @cybernexuss_bot",
      link: "https://t.me/cybernexuss_bot",
      icon: <FaTelegram className="inline-block ml-2 text-neon-blue" />,
    },
    {
      text: "YouTube: @cyber_nexuss",
      link: "https://youtube.com/@cybernexuss?si=IN776e9_NqHBb0A3",
      icon: <FaYoutube className="inline-block ml-2 text-red-600" />,
    },
    {
      text: "Instagram: @cyber_nexuss",
      link: "https://instagram.com/cybernexus.uz",
      icon: <FaInstagram className="inline-block ml-2 text-neon-blue" />,
    },
    {
      text: "Tiktok: @cyber_nexuss",
      link: "https://www.tiktok.com/@cyber.nexuss?_t=ZS-8us03V8s29Y&_r=1",
      icon: <FaTiktok className="inline-block ml-2 text-neon-blue" />,
    },
    {
      text: "X: @cyber_nexuss",
      link: "https://x.com/cyber_nexuss?t=l6IO3T3Y60C1ayUcT0MPfw&s=09",
      icon: <FaTwitter className="inline-block ml-2 text-neon-blue" />,
    },
    {
      text: "Mobile app: download",
      link: "https://t.me/cyber_nexuss/75",
      icon: <FaMobileAlt className="inline-block ml-2 text-neon-blue" />,
    },
  ];

  // Typing effect for heading
  const headingText = "Contact Me";
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
        className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center min-h-screen relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Typing effect for heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-center tracking-wider text-neon-green animate-pulse-glow"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          {headingText.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <div
          className={classNames(
            "w-full max-w-lg rounded-lg border-2 border-neon-green bg-black bg-opacity-80 shadow-neon p-5",
            "transition-all duration-300"
          )}
        >
          {/* Social Media Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.a
              href="https://t.me/snovden_01"
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(
                "flex items-center space-x-2 sm:space-x-4 p-3 rounded-md transition-colors bg-neon-blue bg-opacity-20 hover:bg-opacity-40",
                "text-neon-green hover:text-neon-blue"
              )}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
            >
              <FaTelegram className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
              <span className="text-sm sm:text-lg">Telegram</span>
            </motion.a>
            <motion.a
              href="https://instagram.com/cybernexus.uz"
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(
                "flex items-center space-x-2 sm:space-x-4 p-3 rounded-md transition-colors bg-neon-blue bg-opacity-20 hover:bg-opacity-40",
                "text-neon-green hover:text-neon-blue"
              )}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: "easeInOut" }}
            >
              <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
              <span className="text-sm sm:text-lg">Instagram</span>
            </motion.a>
            <motion.a
              href="https://wa.me/+998935188508"
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(
                "flex items-center space-x-2 sm:space-x-4 p-3 rounded-md transition-colors bg-neon-blue bg-opacity-20 hover:bg-opacity-40",
                "text-neon-green hover:text-neon-blue"
              )}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6, ease: "easeInOut" }}
            >
              <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
              <span className="text-sm sm:text-lg">WhatsApp</span>
            </motion.a>
            <motion.a
              href="tel:+998935188508"
              className={classNames(
                "flex items-center space-x-2 sm:space-x-4 p-3 rounded-md transition-colors bg-neon-blue bg-opacity-20 hover:bg-opacity-40",
                "text-neon-green hover:text-neon-blue"
              )}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.8, ease: "easeInOut" }}
            >
              <FaPhone className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
              <span className="text-sm sm:text-lg">Phone</span>
            </motion.a>
            <motion.a
              href="mailto:izzatullayev008@gmail.com"
              className={classNames(
                "flex items-center space-x-2 sm:space-x-4 p-3 rounded-md transition-colors bg-neon-blue bg-opacity-20 hover:bg-opacity-40",
                "text-neon-green hover:text-neon-blue"
              )}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.0, ease: "easeInOut" }}
            >
              <FaEnvelope className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
              <span className="text-sm sm:text-lg">Email</span>
            </motion.a>
            <motion.a
              href="https://github.com/oyatullo2"
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(
                "flex items-center space-x-2 sm:space-x-4 p-3 rounded-md transition-colors bg-neon-blue bg-opacity-20 hover:bg-opacity-40",
                "text-neon-green hover:text-neon-blue"
              )}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.2, ease: "easeInOut" }}
            >
              <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
              <span className="text-sm sm:text-lg">GitHub</span>
            </motion.a>
          </div>
        </div>

        {/* Marquee Section */}
        <motion.div
          className="w-full max-w-5xl mt-8 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5, ease: "easeInOut" }}
        >
          <div className="w-full overflow-hidden bg-black bg-opacity-80 border-2 border-neon-green rounded-lg shadow-neon">
            <motion.div
              className="flex whitespace-nowrap py-2 items-center justify-center animate-marquee"
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.animationPlayState = "paused")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.animationPlayState = "running")
              }
            >
              <span className="mx-4 text-sm sm:text-base font-semibold text-neon-green flex-shrink-0">
                Bizning boshqa ijtimoiy tarmoqdagi manzillarimiz:{" "}
                <FaGlobe className="inline-block ml-2 text-neon-blue" />
              </span>
              {marqueeItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classNames(
                    "mx-4 text-sm sm:text-base font-medium rounded-full px-3 py-1 transition-all duration-300 hover:scale-105",
                    "bg-neon-blue bg-opacity-20 text-neon-green hover:bg-opacity-40 hover:text-neon-blue"
                  )}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {item.text} {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
