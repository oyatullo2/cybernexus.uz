import { Link } from "react-router-dom";
import classNames from "classnames";
import { motion } from "framer-motion";

export const Welcome = () => {
  const sections = [
    {
      title: "Welcome to Cyber Nexus",
      description: "Cyber Nexus - Your Ultimate Cybersecurity Solution",
      image: "/welcome.jpg",
      link: "/",
      reverse: false,
    },
    {
      title: "Go to Premium App",
      description: "Premium App - Your access to premium features",
      image: "/premium-app.avif",
      link: "/premium-app",
      reverse: true,
    },
    {
      title: "Go to News",
      description: "News - Stay updated with the latest cybersecurity news",
      image: "/news.webp",
      link: "/news",
      reverse: false,
    },
    {
      title: "Go to About",
      description: "About - Learn more about Cyber Nexus",
      image: "/about.jpg",
      link: "/about",
      reverse: true,
    },
    {
      title: "Go to Contact",
      description: "Contact - Get in touch with us",
      image: "/contact.jpg",
      link: "/contact",
      reverse: false,
    },
    {
      title: "Go to Help",
      description: "Help - Need help?",
      image: "/help.jpeg",
      link: "/help",
      reverse: true,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black font-mono text-neon-green px-4 sm:px-6 pt-6 pb-10">
      <div className="w-full max-w-5xl mx-auto">
        {sections.map((section, index) => (
          <Link key={index} to={section.link} className="w-full block">
            <motion.div
              className={classNames(
                "mb-6 sm:mb-8 border-2 border-neon-green bg-black bg-opacity-80 shadow-neon rounded-lg p-4 sm:p-5 hover:animate-glitch",
                "flex flex-col md:flex-row items-center",
                { "md:flex-row-reverse": section.reverse }
              )}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.3 + index * 0.3,
                ease: "easeInOut",
              }}
              whileHover={{
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
                borderColor: "#00f0ff",
              }}
            >
              <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
                <img
                  src={section.image}
                  className="rounded-lg max-h-[250px] sm:max-h-[300px] w-full object-cover border border-neon-blue shadow-neon-blue"
                  alt={section.title}
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-center text-center">
                <h1 className="text-xl sm:text-2xl font-bold mb-2 tracking-wide text-neon-green">
                  {section.title}
                </h1>
                <p className="text-sm sm:text-base font-medium text-neon-green opacity-80">
                  {section.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};
