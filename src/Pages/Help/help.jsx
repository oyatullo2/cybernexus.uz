import { useState } from "react";
import classNames from "classnames";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalState/globalstate"; // GlobalContext dan mode olish uchun

export const Help = () => {
  const { mode } = useContext(GlobalContext); // Dark/Light mode ni olish
  const [message, setMessage] = useState("");

  const sendSMS = () => {
    const phoneNumber = "+998935188508"; // Sizning raqamingiz
    const encodedMessage = encodeURIComponent(message); // Xabarni kodlash
    const smsLink = `sms:${phoneNumber}?body=${encodedMessage}`; // SMS havolasi
    window.location.href = smsLink; // SMS ilovasini ochish
  };

  return (
    <div
      className={classNames(
        "min-h-screen  mt-[-50px] flex items-center justify-center p-4 overflow-hidden",
        {
          "bg-gradient-to-br from-gray-800 via-gray-900 to-black": mode === "dark",
          "bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100":
            mode === "light",
        }
      )}
    >
      <div
        className={classNames(
          "w-full max-w-md rounded-xl shadow-lg p-6 flex flex-col gap-4",
          {
            "bg-gray-900 text-white": mode === "dark",
            "bg-white text-gray-800": mode === "light",
          }
        )}
      >
        <h2
          className={classNames("text-2xl font-bold text-center", {
            "text-white": mode === "dark",
            "text-[#f04a4f]": mode === "light",
          })}
        >
          Xabar yuborish
        </h2>
        <textarea
          className={classNames(
            "w-full h-32 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 transition-all duration-300 placeholder-opacity-60",
            {
              "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500":
                mode === "dark",
              "bg-white border-gray-300 text-gray-700 placeholder-gray-400 focus:ring-blue-500":
                mode === "light",
            }
          )}
          placeholder="Xabaringizni shu yerga yozing"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={sendSMS}
          className={classNames(
            "w-full py-3 rounded-lg font-semibold focus:outline-none focus:ring-2 transition-all duration-300",
            {
              "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400":
                mode === "dark",
              "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500":
                mode === "light",
            }
          )}
        >
          SMS yuborish
        </button>
      </div>
    </div>
  );
};