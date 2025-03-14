import { useState, useEffect, useContext } from "react";
import {
  FaRobot,
  FaUser,
  FaTelegramPlane,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion"; // Animatsiyalar uchun
import React from "react";
import { GlobalContext } from "../../GlobalState/globalstate";

const FAQ = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typingMessage, setTypingMessage] = useState(""); // Botning yozayotgan xabari
  const { mode } = useContext(GlobalContext);

  // Chatbot javoblari
  const botResponses = {
    about: (
      <span>
        Biz Cybernexus.uz platformasimiz – bu zamonaviy texnologiyalar va
        kiberxavfsizlik sohasidagi eng so‘nggi yangiliklarni taqdim etuvchi
        loyiha. Maqsadimiz – foydalanuvchilarga qulay va ishonchli tajriba
        taqdim etish!{" "}
        <a href="/about" className="text-blue-400 hover:text-blue-500">
          Batafsil
        </a>
      </span>
    ),
    contact: (
      <span>
        Biz bilan bog‘lanish uchun: Telegram - @snovden_01 yoki Telefon: +998 93
        518 85 08.{" "}
        <a href="/contact" className="text-blue-400 hover:text-blue-500">
          Batafsil
        </a>
      </span>
    ),
    app: (
      <span>
        Cybernexus ilovasi – bu sizning kiberxavfsizlik va yangiliklar uchun eng
        yaxshi hamrohingiz. Hozircha Play Store va App Store’da mavjud emas,
        lekin tez kunda chiqamiz!{" "}
        <a href="/premium-app" className="text-blue-400 hover:text-blue-500">
          Batafsil
        </a>
      </span>
    ),
    help: (
      <span>
        Yordam kerakmi? Savolingizni yozing yoki quyidagi tugmalardan birini
        bosing: About, Contact, App, News, va boshqalar haqida so‘rashingiz
        mumkin!{" "}
        <a href="/help" className="text-blue-400 hover:text-blue-500">
          Batafsil
        </a>
      </span>
    ),
    news: (
      <span>
        Eng so‘nggi yangiliklar: Cybernexus jamoasi yangi kiberxavfsizlik
        vositasini ishga tushirdi! Batafsil ma’lumot tez kunda saytimizda.{" "}
        <a href="/news" className="text-blue-400 hover:text-blue-500">
          Batafsil
        </a>
      </span>
    ),
    salom: "Salom! Sizga qanday yordam bera olaman?",
    "assalomu alaykum":
      "Assalomu alaykum! Cybernexus botiga xush kelibsiz. Savolingiz bo‘lsa, yozing!",
    qalaysiz: "Yaxshiman, rahmat! Siz qalaysiz? Biror savolingiz bormi?",
    nima: "Nima haqida gaplashmoqchisiz? Men sizga About, Contact, App, Help yoki News bo‘yicha yordam bera olaman!",
    rahmat: "Arzimaydi! Yana savolingiz bo‘lsa, yozing.",
    "isming nima": "Men Cybernexus Botman! Sizning ismingiz nima?",
    yaxshi: "Xursandman! Yana nima yordam bera olaman?",
    qachon:
      "Siz nima haqida so‘rayapsiz? App chiqishi haqidami? Tez kunda chiqadi, aniq sana hali yo‘q.",
    qayerdasiz: "Men raqamli botman, bulutlarda yashayman! Siz qayerdansiz?",
    "nima qilyapsiz": "Siz bilan suhbatlashyapman! Siz nima qilyapsiz?",
    bugun:
      "Bugun men sizga yordam berish uchun shu yerdaman. Nima bilmoqchisiz?",
    vaqt: `Hozirgi vaqt: ${new Date().toLocaleTimeString(
      "uz-UZ"
    )}. Yana nima yordam bera olaman?`,
    sana: `Bugungi sana: ${new Date().toLocaleDateString(
      "uz-UZ"
    )}. Boshqa savolingiz bormi?`,
    kim: "Men Cybernexus Botman – sizning virtual yordamchingiz. Siz kimsiz?",
    qanday:
      "Qanday yordam bera olaman? Masalan, vaqt, sana, yangiliklar yoki boshqa savollaringizga javob bera olaman!",
    xayr: "Xayr! Agar yana savolingiz bo‘lsa, qaytib keling!",
    "ob-havo":
      "Hozirda ob-havo haqida aniq ma’lumot bera olmayman, lekin agar shahar nomini aytsangiz, sizni qidiruvga yo‘naltira olaman!",
    til: "Men o‘zbek tilida gaplashaman, ammo ingliz tilida ham savol bersangiz, tushunishga harakat qilaman! Qaysi tilda yozmoqchisiz?",
  };

  // Harfma-harf yozish effekti
  const typeMessage = (text) => {
    let i = 0;
    setTypingMessage("");
    const interval = setInterval(() => {
      if (i < text.length) {
        setTypingMessage((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setMessages((prev) => [...prev, { text, sender: "bot" }]);
        setTypingMessage("");
      }
    }, 40);
  };

  // Tugma bosilganda yoki input yuborilganda ishlaydigan funksiya
  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { text: message, sender: "user" }]);

    setTimeout(() => {
      let response;
      const lowerMessage = message.toLowerCase().trim();

      // Tugma va savollar uchun javoblar
      if (lowerMessage === "salom") response = botResponses.salom;
      else if (lowerMessage === "assalomu alaykum")
        response = botResponses["assalomu alaykum"];
      else if (lowerMessage === "qalaysiz" || lowerMessage === "qalay siz")
        response = botResponses.qalaysiz;
      else if (lowerMessage === "nima" || lowerMessage === "nima gap")
        response = botResponses.nima;
      else if (lowerMessage === "rahmat") response = botResponses.rahmat;
      else if (
        lowerMessage === "isming nima" ||
        lowerMessage === "ismingiz nima"
      )
        response = botResponses["isming nima"];
      else if (lowerMessage === "yaxshi") response = botResponses.yaxshi;
      else if (lowerMessage === "qachon") response = botResponses.qachon;
      else if (lowerMessage === "qayerdasiz")
        response = botResponses.qayerdasiz;
      else if (lowerMessage === "nima qilyapsiz")
        response = botResponses["nima qilyapsiz"];
      else if (lowerMessage === "bugun") response = botResponses.bugun;
      else if (lowerMessage === "vaqt" || lowerMessage === "soat necha")
        response = botResponses.vaqt;
      else if (lowerMessage === "sana" || lowerMessage === "bugun qachon")
        response = botResponses.sana;
      else if (lowerMessage === "kim" || lowerMessage === "kim siz")
        response = botResponses.kim;
      else if (lowerMessage === "qanday") response = botResponses.qanday;
      else if (lowerMessage === "xayr" || lowerMessage === "xayrli kun")
        response = botResponses.xayr;
      else if (lowerMessage === "ob-havo") response = botResponses["ob-havo"];
      else if (lowerMessage === "til") response = botResponses.til;
      else if (lowerMessage.includes("about")) response = botResponses.about;
      else if (lowerMessage.includes("contact"))
        response = botResponses.contact;
      else if (lowerMessage.includes("app")) response = botResponses.app;
      else if (lowerMessage.includes("help")) response = botResponses.help;
      else if (lowerMessage.includes("news")) response = botResponses.news;
      else {
        response = (
          <div>
            <p className="mb-2">
              Kechirasiz, bu savolga javobim yo‘q. Admin bilan bog‘laning:
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="https://t.me/snovden_01"
                target="_blank"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition duration-300"
              >
                <FaTelegramPlane /> @snovden_01
              </a>
              <a
                href="tel:+998935188508"
                className="flex items-center gap-2 text-green-400 hover:text-green-500 transition duration-300"
              >
                <FaPhone /> +998 93 518 85 08
              </a>
            </div>
          </div>
        );
      }

      if (typeof response === "string") {
        typeMessage(response);
      } else {
        setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
      }
    }, 1000);

    setInput("");
  };

  // Chat oynasi uchun ref
  const chatContainerRef = React.useRef(null);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, typingMessage]);

  return (
    <div className="w-full mt-[-50px] min-h-screen animate-[header-top-animation_1s_ease-in-out]  flex justify-center items-center p-4 sm:p-6 font-sans">
      <div className="w-full border-[1px] max-w-md sm:max-w-lg rounded-xl shadow-2xl p-4 sm:p-6 flex flex-col h-[80vh] sm:h-[70vh]">
        {/* Chat header */}
        <div className="flex items-center gap-3 mb-4">
          <FaRobot className="text-blue-400 text-2xl sm:text-3xl animate-pulse" />
          <h1 className="text-xl sm:text-2xl font-bold">Cybernexus Bot</h1>
        </div>

        {/* Chat messages */}
        <div
          ref={chatContainerRef}
          className="flex-1 space-y-4 p-4 border-[1px] rounded-lg overflow-hidden"
          style={{ maxHeight: "calc(100% - 160px)" }} // Mobil uchun balandlik kichraytirildi
        >
          {messages.length === 0 && !typingMessage ? (
            <p className="text-gray-400 text-center text-sm sm:text-base">
              Xabarlar hali yo‘q. Savol bering yoki tugmalardan foydalaning!
            </p>
          ) : (
            <>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] sm:max-w-xs p-2 sm:p-3 rounded-lg shadow-md ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gradient-to-r from-gray-600 to-gray-500 text-gray-200"
                    }`}
                  >
                    {msg.sender === "user" ? (
                      <div className="flex items-center gap-2">
                        <FaUser className="text-xs sm:text-sm" />
                        <span className="text-sm sm:text-base">{msg.text}</span>
                      </div>
                    ) : (
                      <span className="text-sm sm:text-base">{msg.text}</span>
                    )}
                  </div>
                </motion.div>
              ))}
              {typingMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[80%] sm:max-w-xs p-2 sm:p-3 rounded-lg shadow-md bg-gradient-to-r from-gray-600 to-gray-500 text-gray-200 animate-pulse text-sm sm:text-base">
                    {typingMessage}
                  </div>
                </motion.div>
              )}
            </>
          )}
        </div>

        {/* Tugmalar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mt-4">
          {["About", "Contact", "App", "Help", "News"].map((item) => (
            <button
              key={item}
              onClick={() => handleSendMessage(item)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 sm:py-2 rounded-lg transition duration-300 transform hover:scale-105 text-xs sm:text-sm"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Input va yuborish tugmasi */}
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage(input)}
            placeholder="Savolingizni yozing..."
            className="flex-1 p-2 sm:p-3 rounded-lg border-[1px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-sm sm:text-base"
          />
          <button
            onClick={() => handleSendMessage(input)}
            className="p-2 sm:p-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg text-white transition duration-300 transform hover:scale-105"
          >
            <FaPaperPlane className="text-sm sm:text-base" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
