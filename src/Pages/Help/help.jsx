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

      // `mailto` havolasini sinash uchun konsolga chiqaramiz
      console.log("Mailto havolasi:", mailtoLink);

      try {
        window.location.href = mailtoLink; // Email ilovasini ochishga urinish
      } catch (error) {
        // Agar `mailto` ishlamasa, foydalanuvchiga xabar beramiz
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

  return (
    <div
      className={classNames(
        "w-full px-4 sm:px-6 animate-[header-top-animation_1.5s_ease-in-out] flex mt-[-50px] flex-col items-center max-w-full min-h-screen justify-center"
      )}
    >
      <div
        className={classNames(
          "w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg border-[1px] shadow-lg p-4 sm:p-6 md:p-8",
          {
            "bg-gray-900 text-white border-gray-700": mode === "dark",
            "bg-white text-gray-800 border-gray-200": mode === "light",
          }
        )}
      >
        <h2
          className={classNames(
            "text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-center",
            {
              "text-white": mode === "dark",
              "text-[#f04a4f]": mode === "light",
            }
          )}
        >
          Xabar yuborish
        </h2>
        <textarea
          className={classNames(
            "w-full h-28 sm:h-32 md:h-40 lg:h-48 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 transition-all duration-300 placeholder-opacity-60",
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
            "w-full py-2 sm:py-3 md:py-4 mt-4 sm:mt-6 md:mt-8 rounded-lg font-semibold focus:outline-none focus:ring-2 transition-all duration-300",
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