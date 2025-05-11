import { useContext } from "react";
import { GlobalContext } from "../../GlobalState/globalstate";
import { FaTelegramPlane, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import classNames from "classnames";
import { motion } from "framer-motion";

export const Cyberflow = () => {
  const { mode } = useContext(GlobalContext);

  const posts = [
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/9Rc_HWSh5yE",
      icon: <FaYoutube className={classNames("text-2xl", "text-red-600")} />,
      title: "YouTube Short",
    },
    {
      type: "telegram",
      postId: "cyber_nexuss/158",
      icon: (
        <FaTelegramPlane className={classNames("text-2xl", "text-neon-blue")} />
      ),
      title: "Telegram Post #158",
    },
    {
      type: "telegram",
      postId: "cyber_nexuss/3",
      icon: (
        <FaTelegramPlane className={classNames("text-2xl", "text-neon-blue")} />
      ),
      title: "Telegram Post #3",
    },
    {
      type: "telegram",
      postId: "cyber_nexuss/159",
      icon: (
        <FaTelegramPlane className={classNames("text-2xl", "text-neon-blue")} />
      ),
      title: "Telegram Post #159",
    },
    {
      type: "telegram",
      postId: "cyber_nexuss/160",
      icon: (
        <FaTelegramPlane className={classNames("text-2xl", "text-neon-blue")} />
      ),
      title: "Telegram Post #160",
    },
    {
      type: "telegram",
      postId: "cyber_nexuss/209",
      icon: (
        <FaTelegramPlane className={classNames("text-2xl", "text-neon-blue")} />
      ),
      title: "Telegram Post #209",
    },
    {
      type: "linkedin",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7304286962587242496",
      icon: (
        <FaLinkedinIn className={classNames("text-2xl", "text-neon-blue")} />
      ),
      title: "LinkedIn Post #2",
    },
    {
      type: "linkedin",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7317380469455515648",
      icon: (
        <FaLinkedinIn className={classNames("text-2xl", "text-neon-blue")} />
      ),
      title: "LinkedIn Post #1",
    },
    {
      type: "linkedin",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7304285927202328576",
      icon: (
        <FaLinkedinIn className={classNames("text-2xl", "text-neon-blue")} />
      ),
      title: "LinkedIn Post #3",
    },
  ];

  const shuffledPosts = [...posts].sort(() => Math.random() - 0.5);

  // Typing effect for header
  const headingText = "Cyber Nexus News";
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
        {/* Typing effect for header */}
        <motion.p
          className="w-full font-[600] text-[18px] sm:text-2xl text-center py-[5px] sm:py-[8px] mb-8 animate-pulse-glow"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          {headingText.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.p>

        <div className="flex flex-col gap-6 p-4 max-w-4xl w-full">
          {shuffledPosts.map((post, index) => (
            <motion.div
              key={index}
              className={classNames(
                "rounded-2xl border-2 border-neon-green bg-black bg-opacity-80 shadow-neon p-2 sm:p-4 space-y-2",
                "transition-all duration-300"
              )}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2 + 1,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-2">
                {post.icon}
                <h2 className="text-lg sm:text-xl font-semibold text-neon-green">
                  {post.title}
                </h2>
              </div>

              {post.type === "linkedin" && (
                <iframe
                  src={post.src}
                  height="500"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title={post.title}
                  className="rounded-lg w-full"
                ></iframe>
              )}

              {post.type === "telegram" && (
                <iframe
                  src={`https://t.me/${post.postId}?embed=1`}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  scrolling="yes"
                  className="w-full"
                ></iframe>
              )}

              {post.type === "youtube" && (
                <iframe
                  width="100%"
                  height="500"
                  src={post.src}
                  title={post.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
