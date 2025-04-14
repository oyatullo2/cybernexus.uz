import { Outlet, Link } from "react-router-dom"; // Link qo'shildi
import { WelcomeHeader } from "./Header";
import { FaRobot } from "react-icons/fa"; // Bot uchun ikonka (agar rasm bo'lmasa)
import { motion } from "framer-motion"; // Animatsiyalar uchun
import classNames from "classnames";
import { useLocation } from "react-router-dom";

export const Layout = () => {
  const location = useLocation();
  return (
    <>
      <div className="w-full flex flex-col overflow-y-hidden overflow-x-hidden">
        <div className="w-full fixed z-10 animate-[header-top-animation_0.5s_ease-in-out]">
          <WelcomeHeader />
        </div>
        <div className={classNames("w-full overflow-y-scroll mt-[50px] h-full",{
"animate-[header-top-animation_1s_ease-in-out]": location.pathname != "/cyberflow",
        })}>
          <Outlet />
        </div>
        <div
          className={classNames("fixed bottom-5 right-5 z-20", {
            hidden:
              location.pathname === "/captcha" || location.pathname === "/faq",
          })}
        >
          <Link to="/faq">
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg cursor-pointer"
              whileHover={{ scale: 1.2, rotate: 360 }} // Hoverda kattalashadi va aylanadi
              whileTap={{ scale: 0.9 }} // Bosilganda kichrayadi
              animate={{
                y: [0, -10, 0], // Tepaga-pastga harakat
                boxShadow: [
                  "0px 5px 15px rgba(0, 0, 255, 0.4)",
                  "0px 10px 20px rgba(0, 0, 255, 0.6)",
                  "0px 5px 15px rgba(0, 0, 255, 0.4)",
                ], // Soyani pulsatsiya qilish
              }}
              transition={{
                y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                boxShadow: {
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                },
              }}
            >
              {/* Bot rasmi yoki ikonka */}
              <FaRobot className="text-white text-2xl" />{" "}
              {/* Agar rasm bo'lmasa */}
              {/* Agar rasm bo'lsa, quyidagi tarzda qo'shing */}
              {/* <img src="/bot-image.png" alt="Bot" className="w-10 h-10 rounded-full" /> */}
            </motion.div>
          </Link>
        </div>
      </div>
    </>
  );
};
