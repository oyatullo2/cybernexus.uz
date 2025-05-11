import { useState } from "react";
import classNames from "classnames";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalState/globalstate";
import { motion } from "framer-motion";

export const Help = () => {
  const { mode } = useContext(GlobalContext);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const matrix = document.querySelector(".matrix-rain");
    if (!matrix) return;

    for (let i = 0; i < 500; i++) {
      const span = document.createElement("span");
      span.textContent = String.fromCharCode(0x30a0 + Math.random() * 96); // Matrix-style belgilar
      span.style.left = Math.random() * 100 + "vw";
      span.style.animationDuration = Math.random() * 5 + 5 + "s";
      span.style.animationDelay = Math.random() * 5 + "s";
      matrix.appendChild(span);
    }

    return () => {
      matrix.innerHTML = "";
    };
  }, []);

  const sendMessage = () => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    const encodedMessage = encodeURIComponent(message);

    if (isMobile) {
      const phoneNumber = "+998935188508";
      const smsLink = `sms:${phoneNumber}?body=${encodedMessage}`;
      window.location.href = smsLink;
    } else {
      const email = "izzatullayev008@gmail.com";
      const subject = encodeURIComponent("Xabar yuborish");
      const mailtoLink = `mailto:${email}?subject=${subject}&body=${encodedMessage}`;

      console.log("Mailto havolasi:", mailtoLink);

      try {
        window.location.href = mailtoLink;
      } catch (error) {
        console.error("Email ochishda xatolik:", error);
        alert(
          "Email ilovasi ochilmadi. Iltimos, xabarni qo‘lda yuboring:\n" +
            `Email: ${email}\n` +
            `Sarlavha: Xabar yuborish\n` +
            `Xabar: ${message}`
        );
      }
    }
  };

  // Typing effect for header
  const headingText = "Xabar yuborish";
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
    <div className="w-full mt-[-80px] min-h-screen bg-black font-mono text-neon-green px-4 sm:px-6 pt-6 pb-10 overflow-x-hidden relative">
      {/* Scanline and Matrix Rain background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="scanline"></div>
        <div className="matrix-rain"></div>
      </div>

      <motion.div
        className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center min-h-screen relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Typing effect for header */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-center tracking-wider animate-pulse-glow"
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

        <motion.div
          className={classNames(
            "w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg border-2 border-neon-green bg-black bg-opacity-80 shadow-neon p-4 sm:p-6 md:p-8",
            "transition-all duration-300"
          )}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
        >
          <textarea
            className={classNames(
              "w-full h-28 sm:h-32 md:h-40 lg:h-48 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 transition-all duration-300 placeholder-opacity-60",
              "bg-gray-900 border-neon-blue text-neon-green placeholder-neon-green focus:ring-neon-green"
            )}
            placeholder="Xabaringizni shu yerga yozing"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <motion.button
            onClick={sendMessage}
            className={classNames(
              "w-full py-2 sm:py-3 md:py-4 mt-4 sm:mt-6 md:mt-8 rounded-lg font-semibold focus:outline-none focus:ring-2 transition-all duration-300",
              "bg-neon-blue bg-opacity-20 text-neon-green hover:bg-opacity-40 hover:text-neon-blue focus:ring-neon-green"
            )}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeInOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(0, 255, 0, 0.7)",
            }}
          >
            Xabar yuborish
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};
