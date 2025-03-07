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
} from "react-icons/fa";

export const Contact = () => {
  const { mode } = useContext(GlobalContext);
  return (
    <>
      <div className="w-full mt-[-50px] px-[10px] animate-[header-top-animation_1.5s_ease-in-out] flex flex-col items-center max-w-full h-screen overflow-hidden justify-center">
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
            {/* Telegram */}
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

            {/* Instagram */}
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

            {/* WhatsApp */}
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

            {/* Phone */}
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

            {/* Gmail */}
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

            {/* GitHub */}
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
      </div>
    </>
  );
};
