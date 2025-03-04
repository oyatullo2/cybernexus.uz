import { useState } from "react";
import classNames from "classnames";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalState/globalstate"; // GlobalContext dan mode olish uchun

export const Help = () => {
  const { mode } = useContext(GlobalContext); // Dark/Light mode ni olish
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    // Qurilma turini aniqlash (telefon yoki kompyuter)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    const encodedMessage = encodeURIComponent(message); // Xabarni kodlash

    if (isMobile) {
      // Telefonlarda SMS
      const phoneNumber = "+998935188508"; // Sizning raqamingiz
      const smsLink = `sms:${phoneNumber}?body=${encodedMessage}`;
      window.location.href = smsLink; // SMS ilovasini ochish
    } else {
      // Kompyuterlarda Email
      const email = "izzatullayev008@gmail.com";
      const subject = encodeURIComponent("Xabar yuborish"); // Email sarlavhasi
      const mailtoLink = `mailto:${email}?subject=${subject}&body=${encodedMessage}`;
      window.location.href = mailtoLink; // Email ilovasini ochish
    }
  };

  return (
    <div
      className={classNames(
        "w-full mt-[-50px] px-[10px] flex flex-col items-center max-w-full h-screen justify-center"
      )}
    >
      <div
        className={classNames(
          "w-full max-w-md rounded-lg shadow-lg p-[20px]",
          {
            "bg-gray-900 text-white": mode === "dark",
            "bg-white text-gray-800": mode === "light",
          }
        )}
      >
        <h2
          className={classNames("text-3xl font-bold mb-8 text-center", {
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
          onClick={sendMessage}
          className={classNames(
            "w-full py-3 mt-4 rounded-lg font-semibold focus:outline-none focus:ring-2 transition-all duration-300",
            {
              "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400":
                mode === "dark",
              "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500":
                mode === "light",
            }
          )}
        >
          Xabar yuborish
        </button>
      </div>
    </div>
  );
};