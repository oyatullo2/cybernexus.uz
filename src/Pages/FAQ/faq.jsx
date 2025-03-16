import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useContext,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";
// import { useContext } from "react";
import { GlobalContext } from "../../GlobalState/globalstate";
import {
  FaBars,
  FaPlus,
  FaSearch,
  FaPaperPlane,
  FaTrash,
  FaNewspaper,
  FaInfoCircle,
  FaPhone,
  FaQuestionCircle,
  FaCode,
  FaCalculator,
  FaClock,
  FaLanguage,
  FaFileAlt,
  FaImage,
  FaMicrophone,
  FaGlobe,
  FaMusic,
  FaUtensils,
  FaBell,
  FaDumbbell,
  FaWifi,
  FaBook,
  FaChess,
  FaStar,
  FaWallet,
  FaGoogle,
  FaTelegram,
  FaLightbulb,
  FaFlask,
  FaHeartbeat,
  FaPlane,
  FaInstagram,
  FaRandom,
  FaHeart,
  FaCalendarAlt,
  FaVolumeUp,
  FaCamera,
  FaGithub,
  FaYoutube,
  FaSun,
  FaMoon,
  FaRobot,
  FaHistory,
  FaChartLine,
  FaFileImage,
  FaMicrophoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

// Stikerlarni render qiluvchi funksiya
const getSticker = (type) => {
  const stickers = {
    greeting: <FaStar className="text-yellow-400" />,
    error: <FaBell className="text-red-500" />,
    math: <FaCalculator className="text-blue-500" />,
    translate: <FaLanguage className="text-green-500" />,
    search: <FaSearch className="text-gray-600" />,
    code: <FaCode className="text-purple-500" />,
    time: <FaClock className="text-blue-400" />,
    weather: <FaGlobe className="text-blue-300" />,
    advice: <FaLightbulb className="text-yellow-500" />,
    currency: <FaWallet className="text-green-600" />,
    motivation: <FaHeart className="text-red-500" />,
    history: <FaBook className="text-brown-500" />,
    science: <FaFlask className="text-blue-600" />,
    health: <FaHeartbeat className="text-red-600" />,
    travel: <FaPlane className="text-blue-500" />,
    recipe: <FaUtensils className="text-orange-500" />,
    music: <FaMusic className="text-purple-400" />,
    reminder: <FaBell className="text-yellow-500" />,
    sport: <FaDumbbell className="text-green-500" />,
    internet: <FaWifi className="text-blue-400" />,
    dictionary: <FaBook className="text-gray-600" />,
    chess: <FaChess className="text-black" />,
    horoscope: <FaStar className="text-purple-500" />,
    book: <FaBook className="text-brown-600" />,
    budget: <FaWallet className="text-green-500" />,
    help: <FaQuestionCircle className="text-gray-500" />,
    default: <FaQuestionCircle className="text-gray-400" />,
    voice: <FaVolumeUp className="text-blue-500" />,
    image: <FaCamera className="text-purple-500" />,
    random: <FaRandom className="text-orange-500" />,
    calendar: <FaCalendarAlt className="text-green-500" />,
  };
  return stickers[type] || stickers.default;
};

const ChatBot = () => {
  const { mode, toggleMode } = useContext(GlobalContext);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("currentChat");
    return saved
      ? JSON.parse(saved)
      : [
          {
            text: "Assalomu alaykum! Men CyberNexus AI, sizning aqlli yordamchingizman! Qanday yordam berishim mumkin?",
            sender: "ai",
            time: new Date(),
            sticker: "greeting",
            final: true,
          },
        ];
  });
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState(() => {
    const savedHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    return savedHistory
      .filter((chat) => chat.messages && chat.messages.length > 0)
      .slice(-6);
  });
  const [showHistory, setShowHistory] = useState(false);
  const [currentChatId, setCurrentChatId] = useState(() => {
    const savedHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    const maxId =
      savedHistory.length > 0
        ? Math.max(...savedHistory.map((chat) => chat.id))
        : 0;
    return maxId + 1;
  });
  const [context, setContext] = useState([]);
  const [userMemory, setUserMemory] = useState({
    name: "",
    interests: [],
    reminders: [],
    dailyTips: [],
  });
  const [selectedChats, setSelectedChats] = useState([]);
  const [touchStart, setTouchStart] = useState(null);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const messagesEndRef = useRef(null);

  // Memoization
  const memoizedMessages = useMemo(() => messages, [messages]);

  useEffect(() => {
    localStorage.setItem("currentChat", JSON.stringify(messages));
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    localStorage.setItem("currentChatId", currentChatId);
    scrollToBottom();
    const handleUnload = () => {
      const filteredMessages = messages.filter(
        (msg) =>
          msg.text !== "Yangi chat boshlandi! Qanday yordam berishim mumkin?"
      );
      if (
        filteredMessages.length > 0 &&
        !chatHistory.some((chat) => chat.id === currentChatId)
      ) {
        setChatHistory((prev) =>
          [...prev, { id: currentChatId, messages: filteredMessages }].slice(-6)
        );
      }
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [messages, chatHistory, currentChatId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const correctTypo = (input) => {
    const corrections = {
      slaom: "salom",
      slm: "salom",
      rhamat: "rahmat",
      rakhmat: "rahmat",
      qidrimok: "qidirmoq",
      izal: "izla",
      qidir: "qidirmoq",
      top: "qidirmoq",
      trajima: "tarjima",
      translate: "tarjima",
      obhavo: "ob-havo",
      havo: "ob-havo",
      vaq: "vaqt",
      soa: "soat",
      kod: "kod yoz",
      dastur: "kod yoz",
      maslaht: "maslahat",
      music: "musiqa",
      retsept: "retsept",
      kitop: "kitob",
      book: "kitob",
      time: "vaqt",
    };
    const words = input
      .toLowerCase()
      .split(/\s+/)
      .map((word) => corrections[word] || word);
    return words.join(" ");
  };

  // Takliflar generatsiyasi
  const generateSuggestions = (input, aiResponses) => {
    const normalized = correctTypo(input).toLowerCase().trim();
    if (!normalized) return [];

    const baseSuggestions = [
      "Hozirgi vaqtni ko‘rsat",
      "Toshkentda ob-havo qanday?",
      "Salom inglizchaga tarjima qil",
      "5 + 3 ni hisobla",
      "HTML kod yoz",
      "Maslahat ber",
      "Musiqa tavsiya qil",
      "Palov retsepti",
      "Kitob tavsiya qil",
      "Internetdan qidirmoq",
    ];

    const filteredSuggestions = baseSuggestions
      .filter(
        (s) =>
          s.toLowerCase().includes(normalized) &&
          aiResponses.some((r) => r.trigger.test(s.toLowerCase()))
      )
      .slice(0, 3);

    return filteredSuggestions.length > 0
      ? filteredSuggestions
      : baseSuggestions
          .filter((s) =>
            aiResponses.some((r) => r.trigger.test(s.toLowerCase()))
          )
          .slice(0, 3);
  };

  // State va event handlerlar (React ichida ishlatish uchun)

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setSuggestions(value.trim() ? generateSuggestions(value, aiResponses) : []);
  };

  const typeMessage = async (text, stickerType, isSocialMedia = false) => {
    let currentText = "";

    if (isSocialMedia) {
      setMessages((prev) => [
        ...prev,
        {
          text,
          sender: "ai",
          time: new Date(),
          sticker: stickerType,
          final: true,
        },
      ]);
    } else {
      for (let i = 0; i < text.length; i++) {
        currentText += text[i];
        setMessages((prev) => {
          const newMessages = [...prev];
          if (
            newMessages[newMessages.length - 1]?.sender === "ai" &&
            !newMessages[newMessages.length - 1]?.final
          ) {
            newMessages[newMessages.length - 1] = {
              text: currentText,
              sender: "ai",
              time: new Date(),
              sticker: null,
              final: false,
            };
          } else {
            newMessages.push({
              text: currentText,
              sender: "ai",
              time: new Date(),
              sticker: null,
              final: false,
            });
          }
          return newMessages;
        });
        await new Promise((resolve) => setTimeout(resolve, 50));
      }

      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = {
          text: currentText,
          sender: "ai",
          time: new Date(),
          sticker: stickerType,
          final: true,
        };
        return newMessages;
      });
    }
  };

  const handleSend = useCallback(async () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: "user",
      time: new Date(),
      final: true,
    };
    setMessages((prev) => [...prev, userMessage]);
    setContext((prev) => [...prev, input]);

    if (input.toLowerCase().includes("ismim")) {
      const name = input.split("ismim ")[1] || input.split("my name is ")[1];
      if (name) setUserMemory((prev) => ({ ...prev, name }));
    } else if (input.toLowerCase().includes("man man")) {
      const interest = input.split("man man ")[1] || input.split("i like ")[1];
      if (interest)
        setUserMemory((prev) => ({
          ...prev,
          interests: [...prev.interests, interest],
        }));
    } else if (input.toLowerCase().includes("eslatma")) {
      const reminder = input.split("eslatma ")[1];
      if (reminder)
        setUserMemory((prev) => ({
          ...prev,
          reminders: [...prev.reminders, reminder],
        }));
    }

    setInput("");

    const response = await getAIResponse(input);
    await typeMessage(response.text, response.sticker, response.isSocialMedia);
    setContext((prev) => [...prev, response.text]);
  }, [input, context]);

  const analyzeContext = (newInput) => {
    const keywords = newInput.toLowerCase().split(" ");
    const lastContext = context[context.length - 1] || "";
    return {
      isContinuation: lastContext.includes("Yana malumot beraymi?"),
      keywords,
      lastTopic: lastContext.split(" ").slice(-2).join(" "),
    };
  };

  const getAIResponse = async (message) => {
    const normalizedMsg = message.toLowerCase().trim();
    const { isContinuation, keywords, lastTopic } =
      analyzeContext(normalizedMsg);
    let response = "";
    let sticker = "";
    let isSocialMedia = false;

    const isYesResponse = ["ha", "yes", "xa", "haaa"].includes(normalizedMsg);

    if (isContinuation && isYesResponse) {
      if (lastTopic.includes("musiqa")) {
        const songs = [
          'Xursand kayfiyat uchun: Coldplay - "Viva La Vida". 🎶',
          'Romantik muhit uchun: Adele - "Someone Like You". 💕',
          'Energiya uchun: Imagine Dragons - "Believer". ⚡',
          'Klassik uslub uchun: Mozart - "Symphony No. 40". 🎹',
        ];
        const randomSong = songs[Math.floor(Math.random() * songs.length)];
        response = `🎵 **Yana musiqa tavsiyasi:** ${randomSong}\nYana malumot beraymi? (Ha/Yo‘q)`;
        sticker = "music";
      } else if (lastTopic.includes("shou")) {
        const shows = [
          'Bugun kechqurun: "O‘zbekiston Idol" - O‘zbekiston TV, soat 20:00. 🎤',
          'Komediya shou: "KVN Uzbekistan" - YouTube’da mavjud. 😂',
          'Drama shou: "Sardor Rahimxon konserti" - Toshkent, 25-mart. 🎭',
          'Teleshou: "Yulduzlar jangi" - Milliy TV, soat 21:00. 📺',
        ];
        const randomShow = shows[Math.floor(Math.random() * shows.length)];
        response = `📺 **Yana shou haqida:** ${randomShow}\nYana malumot beraymi? (Ha/Yo‘q)`;
        sticker = "music";
      } else if (lastTopic.includes("retsept")) {
        const recipes = [
          "**Osh retsepti:** 1 kg guruch, 400 g go‘sht, 200 g sabzi, 2 piyoz, 80 ml yog‘. Qovurib, 50 daqiqa pishiring. 🍲",
          "**Lag‘mon retsepti:** 300 g go‘sht, 2 karam, 1 piyoz, 200 g noodle, 40 daqiqa pishiring. 🍜",
          "**Salat Caesar:** 1 bosh salat, 100 g tovuq, 50 g parmezan, dressing bilan aralashtirib. 🥗",
          "**Supa retsepti:** 250 g go‘sht, 3 kartoshka, 1 sabzi, 45 daqiqa qaynatish. 🥣",
        ];
        const randomRecipe =
          recipes[Math.floor(Math.random() * recipes.length)];
        response = `🍴 **Yana retsept:** ${randomRecipe}\nYana malumot beraymi? (Ha/Yo‘q)`;
        sticker = "recipe";
      } else if (lastTopic.includes("kitob")) {
        const books = [
          '"Sherlock Holmes" (Arthur Conan Doyle) - detektiv janri. 📘',
          '"Dunyoning eng buyuk hikoyalari" (O‘zbek adabiyoti to‘plami). 📙',
          '"Dune" (Frank Herbert) - ilmiy fantastika. 📗',
          '"Yodingdami o‘sha oqshom" (Cho‘lpon) - o‘zbek klassikasi. 📕',
        ];
        const randomBook = books[Math.floor(Math.random() * books.length)];
        response = `📚 **Yana kitob tavsiyasi:** ${randomBook}\nYana malumot beraymi? (Ha/Yo‘q)`;
        sticker = "book";
      } else {
        response = `🤔 Oldingi mavzuda yangi ma’lumot topa olmadim. Boshqa nima haqida malumot berishimni xohlaysiz?`;
        sticker = "default";
      }
      return { text: response, sticker, isSocialMedia };
    }

    if (
      normalizedMsg.includes("sen kimsan") ||
      normalizedMsg.includes("o‘zing haqingda") ||
      normalizedMsg.includes("kim")
    ) {
      response = `Men CyberNexus AI, CyberNexus kompaniyasi tomonidan yaratilgan zamonaviy sun’iy intellekt yordamchisiman! 🚀\n\n**Nimalarga qodirman?**\n- Matematik hisob-kitoblar (masalan, 5 + 3)\n- Tarjima qilish (masalan, "salom inglizchaga")\n- Internetdan qidirish (masalan, "qidirmoq AI")\n- Kod yozish (HTML, CSS, JS)\n- Ob-havo ma’lumotlari (masalan, "Toshkentda ob-havo")\n- Vaqt va sana (masalan, "hozir soat nechchi")\n- Maslahatlar (hayotiy, sog‘liq, sayohat)\n- Eslatmalar qo‘shish va boshqarish\n- Musiqa, shou, retsept, kitob tavsiyalari\n- Ovozli xabar va rasm tahlil (hozircha mock)\n- Shaxsiy kunlik maslahatlar va motivatsiya\n\nSizga qanday yordam bera olaman?`;
      sticker = "greeting";
    } else if (
      normalizedMsg.includes("qidirmoq") ||
      normalizedMsg.includes("search") ||
      normalizedMsg.includes("izla") ||
      normalizedMsg.includes("top")
    ) {
      const query = normalizedMsg
        .replace(/(qidirmoq|search|izla|top)/i, "")
        .trim();
      if (query) {
        setShowSearchModal(true);
        setInput(query);
      } else {
        response =
          'Iltimos, qidirish uchun so‘rovni ko‘rsating, masalan: "qidirmoq AI" yoki "izla technology".';
        sticker = "search";
      }
    } else if (normalizedMsg.match(/(\d+[\s+*-/]\d+)/)) {
      try {
        const expr = normalizedMsg.replace(/\s+/g, "");
        const result = eval(expr);
        response = `📊 **Hisob-kitob natijasi:**\n- Ifoda: ${normalizedMsg}\n- Natija: ${expr} = ${result}\n\nYana hisob-kitob qilishni xohlaysizmi?`;
        sticker = "math";
      } catch (e) {
        response = '❌ Xatolik! To‘g‘ri ifoda kiriting, masalan: "5 + 3".';
        sticker = "error";
      }
    } else if (
      normalizedMsg.includes("tarjima") ||
      normalizedMsg.includes("translate") ||
      normalizedMsg.includes("o‘zbekchaga") ||
      normalizedMsg.includes("inglizchaga")
    ) {
      const words = normalizedMsg.split(" ");
      let textToTranslate = "";
      let targetLang = null;

      for (let i = 0; i < words.length; i++) {
        const word = words[i].replace("chaga", "").replace("cha", "");
        if (["ingliz", "rus", "fransuz", "nemis", "o‘zbek"].includes(word)) {
          targetLang = word;
          textToTranslate =
            words
              .slice(0, i)
              .join(" ")
              .replace(/(tarjima|translate)/i, "")
              .trim() ||
            words
              .slice(i + 1)
              .join(" ")
              .trim();
          break;
        }
      }

      if (!targetLang) {
        response =
          'Iltimos, qaysi tilga tarjima qilishni aniq ko‘rsating, masalan: "salom inglizchaga" yoki "hello o‘zbekchaga".';
        sticker = "translate";
      } else if (!textToTranslate) {
        response =
          'Iltimos, tarjima qilinadigan so‘zni kiriting, masalan: "salom inglizchaga".';
        sticker = "translate";
      } else {
        const translate = (text, lang) => {
          const dict = {
            salom: {
              en: "hello",
              ru: "привет",
              fr: "bonjour",
              de: "hallo",
              uz: "salom",
            },
            rahmat: {
              en: "thank you",
              ru: "спасибо",
              fr: "merci",
              de: "danke",
              uz: "rahmat",
            },
            qanday: {
              en: "how",
              ru: "как",
              fr: "comment",
              de: "wie",
              uz: "qanday",
            },
            nima: { en: "what", ru: "что", fr: "quoi", de: "was", uz: "nima" },
            yaxshi: {
              en: "good",
              ru: "хорошо",
              fr: "bien",
              de: "gut",
              uz: "yaxshi",
            },
            yomon: {
              en: "bad",
              ru: "плохо",
              fr: "mauvais",
              de: "schlecht",
              uz: "yomon",
            },
            xayr: {
              en: "goodbye",
              ru: "пока",
              fr: "au revoir",
              de: "tschüss",
              uz: "xayr",
            },
            kechirasiz: {
              en: "sorry",
              ru: "извините",
              fr: "désolé",
              de: "entschuldigung",
              uz: "kechirasiz",
            },
            ish: {
              en: "work",
              ru: "работа",
              fr: "travail",
              de: "arbeit",
              uz: "ish",
            },
            vaqt: {
              en: "time",
              ru: "время",
              fr: "temps",
              de: "zeit",
              uz: "vaqt",
            },
            dunyo: {
              en: "world",
              ru: "мир",
              fr: "monde",
              de: "welt",
              uz: "dunyo",
            },
            kitob: {
              en: "book",
              ru: "книга",
              fr: "livre",
              de: "buch",
              uz: "kitob",
            },
            sevgi: {
              en: "love",
              ru: "любовь",
              fr: "amour",
              de: "liebe",
              uz: "sevgi",
            },
            kuch: {
              en: "power",
              ru: "сила",
              fr: "puissance",
              de: "kraft",
              uz: "kuch",
            },
            "o‘zbek": {
              en: "Uzbek",
              ru: "узбекский",
              fr: "ouzbek",
              de: "usbekisch",
              uz: "o‘zbek",
            },
          };
          const langKeyMap = {
            ingliz: "en",
            rus: "ru",
            fransuz: "fr",
            nemis: "de",
            "o‘zbek": "uz",
          };
          const langKey = langKeyMap[lang] || "en";
          return (
            dict[text.toLowerCase()]?.[langKey] ||
            `${text} (tarjima topilmadi, boshqa so‘z kiriting yoki so‘zni tekshiring)`
          );
        };

        response = `🌐 **Tarjima:** "${textToTranslate}" -> "${translate(
          textToTranslate,
          targetLang
        )}"\n\nYana biror so‘zni tarjima qilishni xohlaysizmi?`;
        sticker = "translate";
      }
    } else if (
      normalizedMsg.includes("vaqt") ||
      normalizedMsg.includes("soat") ||
      normalizedMsg.includes("sana") ||
      normalizedMsg.includes("bugun")
    ) {
      const zone = normalizedMsg.includes("london")
        ? "en-GB"
        : normalizedMsg.includes("new york")
        ? "en-US"
        : "uz-UZ";
      response = `⏰ **Hozirgi vaqt:** ${new Date().toLocaleTimeString(
        zone
      )}\n📅 **Sana:** ${new Date().toLocaleDateString(
        zone
      )}\n\nBoshqa shaharda vaqtni bilishni xohlaysizmi?`;
      sticker = "time";
    } else if (
      normalizedMsg.includes("kod yoz") ||
      normalizedMsg.includes("code") ||
      normalizedMsg.includes("dastur")
    ) {
      if (normalizedMsg.includes("html")) {
        response = `💻 **HTML Kod:**\n\`\`\`html\n<!DOCTYPE html>\n<html lang="uz">\n<head>\n  <meta charset="UTF-8">\n  <title>Salom Dunyo</title>\n</head>\n<body>\n  <h1>Salom Dunyo</h1>\n</body>\n</html>\n\`\`\`\n\nBoshqa tilda kod yozishni xohlaysizmi (CSS, JS)?`;
        sticker = "code";
      } else if (normalizedMsg.includes("css")) {
        response = `💻 **CSS Kod:**\n\`\`\`css\nbody {\n  font-family: Arial, sans-serif;\n  background-color: #f0f0f0;\n  text-align: center;\n}\nh1 {\n  color: #333;\n  font-size: 2rem;\n}\n\`\`\`\n\nBoshqa tilda kod yozishni xohlaysizmi (HTML, JS)?`;
        sticker = "code";
      } else if (
        normalizedMsg.includes("js") ||
        normalizedMsg.includes("javascript")
      ) {
        response = `💻 **JavaScript Kod:**\n\`\`\`javascript\nconsole.log("Salom Dunyo!");\nlet x = 5;\nlet y = 10;\nconsole.log("Yig‘indi:", x + y);\n\`\`\`\n\nBoshqa tilda kod yozishni xohlaysizmi (HTML, CSS)?`;
        sticker = "code";
      } else {
        response =
          "Qanday kod yozishni xohlaysiz? Iltimos, HTML, CSS yoki JS deb ko‘rsating!";
        sticker = "code";
      }
    } else if (
      normalizedMsg.includes("ob-havo") ||
      normalizedMsg.includes("weather") ||
      normalizedMsg.includes("havo")
    ) {
      const city = normalizedMsg.replace(/(ob-havo|weather|havo)/i, "").trim();
      response = city
        ? `🌤️ **${city}da ob-havo:** 25°C, quyoshli (mock). Namlik: 60%, shamol: 5 m/s.\n\nBoshqa shahar ob-havosini bilishni xohlaysizmi?`
        : "Qaysi shaharning ob-havosini bilishni xohlaysiz?";
      sticker = "weather";
    } else if (
      normalizedMsg.includes("maslahat") ||
      normalizedMsg.includes("advice") ||
      normalizedMsg.includes("nima qilay")
    ) {
      const tips = [
        "Har kuni 10 daqiqa dam oling, bu stressni kamaytiradi! 🧘",
        "Kun davomida 2-3 litr suv iching, sog‘ligingiz yaxshilanadi! 💧",
        "Erta uyg‘onishni odat qiling, kuningiz samarali bo‘ladi! 🌅",
        "Yangi mahorat o‘rganishga vaqt ajrating, masalan, dasturlash! 📚",
      ];
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      response = `💡 **Maslahat:** ${randomTip}\n\nYana maslahat kerakmi?`;
      sticker = "advice";
    } else if (
      normalizedMsg.includes("valyuta") ||
      normalizedMsg.includes("currency") ||
      normalizedMsg.includes("kurs")
    ) {
      const amount = normalizedMsg.match(/\d+/)?.[0];
      response = amount
        ? `💰 **Valyuta konvertatsiyasi:**\n${amount} USD = ${
            amount * 12700
          } UZS (kurs: 1 USD = 12700 UZS, 15.03.2025 holatiga ko‘ra)\n\nBoshqa valyutani konvertatsiya qilishni xohlaysizmi?`
        : 'Qaysi valyutani konvertatsiya qilishni xohlaysiz? Masalan: "10 USD".';
      sticker = "currency";
    } else if (
      normalizedMsg.includes("motivatsiya") ||
      normalizedMsg.includes("kayfiyat") ||
      normalizedMsg.includes("ruh")
    ) {
      const quotes = [
        "Siz o‘zingizga ishonganingizda, dunyo ham sizga ishona boshlaydi! 🌟",
        "Har kichik yutuq katta muvaffaqiyatga olib boradi! 🚀",
        "Bugun o‘zingiz uchun kichik bir ish qiling, bu sizni xursand qiladi! 🎁",
        "Sizda cheksiz imkoniyatlar bor, faqat harakat qiling! 💪",
      ];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      response = `❤️ **Motivatsiya:** ${randomQuote}\n\nYana motivatsiya kerakmi?`;
      sticker = "motivation";
    } else if (
      normalizedMsg.includes("tarix") ||
      normalizedMsg.includes("history") ||
      normalizedMsg.includes("fakt")
    ) {
      const facts = [
        "1969-yilda Apollo 11 missiyasi bilan Oyga odam qadam qo‘ydi. 🌕",
        "O‘zbekiston 1924-yilda SSSR tarkibida mustaqil respublika sifatida tashkil topdi. 🇺🇿",
        "1492-yilda Xristofor Kolumb Amerika qit’asini kashf etdi. ⛵",
        "1876-yilda Aleksandr Bell telefonni ixtiro qildi. 📞",
      ];
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      response = `📜 **Tarixiy fakt:** ${randomFact}\n\nYana qiziqarli fakt kerakmi?`;
      sticker = "history";
    } else if (
      normalizedMsg.includes("ilmiy") ||
      normalizedMsg.includes("science") ||
      normalizedMsg.includes("fakt")
    ) {
      const facts = [
        "Inson tanasida taxminan 0.2 mg oltin mavjud, asosan qonda. 🧬",
        "Yorug‘likning tezligi vakuumda 299,792 km/s. 💡",
        "Suv 4°C da eng yuqori zichlikka ega. 💧",
        "Delfinlar bir yarim shunda uyquga ketadi, ikkinchi yarmi hushyor qoladi. 🐬",
      ];
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      response = `🔬 **Ilmiy fakt:** ${randomFact}\n\nYana qiziqarli fakt kerakmi?`;
      sticker = "science";
    } else if (
      normalizedMsg.includes("tibbiy") ||
      normalizedMsg.includes("sog‘liq") ||
      normalizedMsg.includes("salomatlik")
    ) {
      const tips = [
        "Bosh og‘rig‘i bo‘lsa, 10 daqiqa dam oling va suv iching. 💧",
        "Har kuni 7-8 soat uxlash immunitetni mustahkamlaydi. 😴",
        "Ko‘z charchaganida 20-20-20 qoidasini sinab ko‘ring: 20 daqiqada 20 soniya 20 fut uzoqlikka qarang. 👓",
        "K vitaminli mevalar (apelsin, olma) iste’mol qiling. 🍊",
      ];
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      response = `🩺 **Sog‘liq maslahati:** ${randomTip}\n\nYana sog‘liq bo‘yicha maslahat kerakmi?`;
      sticker = "health";
    } else if (
      normalizedMsg.includes("sayohat") ||
      normalizedMsg.includes("travel") ||
      normalizedMsg.includes("sayr")
    ) {
      const tips = [
        "Parijda Sen daryosi bo‘yida sayr qiling, ajoyib manzara! 🗼",
        "Toshkentda Istiqlol maydonini ziyorat qiling, tarixiy joy! 🥙",
        "Dubayda sahroda safari tadbiriga boring! 🏜️",
        "Istanbulda Kapali Karşı marketini ko‘ring, mahalliy savdoni his eting! 🕌",
      ];
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      response = `✈️ **Sayohat maslahati:** ${randomTip}\n\nBoshqa sayohat g‘oyasi kerakmi?`;
      sticker = "travel";
    } else if (
      normalizedMsg.includes("retsept") ||
      normalizedMsg.includes("recipe") ||
      normalizedMsg.includes("taom")
    ) {
      const recipes = [
        "**Palov retsepti:** 1 kg guruch, 500 g go‘sht, 300 g sabzi, 2 piyoz, 100 ml yog‘. Qovurib, 1 soat pishiring. 🍚",
        "**Manti retsepti:** 500 g un, 300 g go‘sht, 2 piyoz, tuz, 40 daqiqa bug‘da pishiring. 🥟",
        "**Salat retsepti:** 2 pomidor, 1 bodring, 1 piyoz, zaytun yog‘i, tuz. Aralashtirib, ko‘kat seping. 🥗",
        "**Sho‘rva retsepti:** 300 g go‘sht, 2 kartoshka, 1 sabzi, 1 soat qaynatish. 🥄",
      ];
      const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
      response = `🍴 **Retsept:** ${randomRecipe}\nYana malumot beraymi? (Ha/Yo‘q)`;
      sticker = "recipe";
    } else if (
      normalizedMsg.includes("musiqa") ||
      normalizedMsg.includes("music") ||
      normalizedMsg.includes("qoshiq") ||
      normalizedMsg.includes("shou")
    ) {
      if (normalizedMsg.includes("shou")) {
        const shows = [
          'Bugun kechqurun: "O‘zbekiston Idol" - O‘zbekiston TV, soat 20:00. 🎤',
          'Komediya shou: "KVN Uzbekistan" - YouTube’da mavjud. 😂',
          'Drama shou: "Sardor Rahimxon konserti" - Toshkent, 25-mart. 🎭',
          'Teleshou: "Yulduzlar jangi" - Milliy TV, soat 21:00. 📺',
        ];
        const randomShow = shows[Math.floor(Math.random() * shows.length)];
        response = `📺 **Shou haqida:** ${randomShow}\nYana malumot beraymi? (Ha/Yo‘q)`;
        sticker = "music";
      } else {
        const songs = [
          'Xursand kayfiyat uchun: Dua Lipa - "Levitating". 🎶',
          'Romantik muhit uchun: Ed Sheeran - "Perfect". 💕',
          'Energiya uchun: The Weeknd - "Blinding Lights". ⚡',
          'Klassik uslub uchun: Beethoven - "Moonlight Sonata". 🎹',
        ];
        const randomSong = songs[Math.floor(Math.random() * songs.length)];
        response = `🎵 **Musiqa tavsiyasi:** ${randomSong}\nYana malumot beraymi? (Ha/Yo‘q)`;
        sticker = "music";
      }
    } else if (
      normalizedMsg.includes("eslatma") ||
      normalizedMsg.includes("reminder") ||
      normalizedMsg.includes("eslat")
    ) {
      const reminder = normalizedMsg
        .split(/(eslatma|reminder|eslat)/i)[1]
        ?.trim();
      if (reminder) {
        setUserMemory((prev) => ({
          ...prev,
          reminders: [...prev.reminders, reminder],
        }));
        response = `🔔 **Eslatma qo‘shildi:** "${reminder}"\nHozirgi eslatmalaringiz: ${
          userMemory.reminders.join(", ") || "Hozircha yo‘q"
        }\nYana eslatma qo‘shishni xohlaysizmi?`;
      } else {
        response = `🔔 **Eslatmalaringiz:** ${
          userMemory.reminders.join(", ") || "Hozircha yo‘q"
        }\nYangi eslatma qo‘shishni xohlaysizmi? Masalan: "eslatma ertaga uchrashuv".`;
      }
      sticker = "reminder";
    } else if (
      normalizedMsg.includes("sport") ||
      normalizedMsg.includes("exercise") ||
      normalizedMsg.includes("mashq")
    ) {
      const tips = [
        "Har kuni 30 daqiqa yugurish yuragingizni mustahkamlaydi. 🏃",
        "Yoga bilan shug‘ullaning, bu stressni kamaytiradi. 🧘",
        "15 daqiqa dumbbell bilan mashq qiling, mushaklaringizni rivojlantiradi. 🏋️",
        "Velosiped haydashni sinab ko‘ring, bu umumiy fitnessga yordam beradi. 🚴",
      ];
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      response = `💪 **Sport maslahati:** ${randomTip}\n\nYana sport bo‘yicha maslahat kerakmi?`;
      sticker = "sport";
    } else if (
      normalizedMsg.includes("internet tezligi") ||
      normalizedMsg.includes("internet speed") ||
      normalizedMsg.includes("tezkorlik")
    ) {
      response = `📡 **Internet tezligi (taxminiy):** Yuklash 50 Mbps, Yuklash 20 Mbps.\n\nHaqiqiy tezlikni tekshirishni xohlaysizmi yoki boshqa yordam kerakmi?`;
      sticker = "internet";
    } else if (
      normalizedMsg.includes("lug‘at") ||
      normalizedMsg.includes("dictionary") ||
      normalizedMsg.includes("ma’no")
    ) {
      const word = normalizedMsg
        .replace(/(lug‘at|dictionary|ma’no)/i, "")
        .trim();
      const meanings = {
        salom: "Assalomu alaykum (o‘zbekcha tabriklash so‘zi)",
        rahmat: "Tashakkur (minnatdorchilik bildirish)",
        yaxshi: "Yaxshi holat yoki sifat",
        yomon: "Yomon holat yoki sifat",
        vaqt: "Time (vaqt oraligi)",
      };
      response = word
        ? `📖 **So‘z:** "${word}"\n**Ma’no:** ${
            meanings[word] || "Ma’no topilmadi"
          }\n\nBoshqa so‘zning ma’nosini bilishni xohlaysizmi?`
        : "Qaysi so‘zning ma’nosini bilishni xohlaysiz?";
      sticker = "dictionary";
    } else if (
      normalizedMsg.includes("shaxmat") ||
      normalizedMsg.includes("chess") ||
      normalizedMsg.includes("shohmot")
    ) {
      const tips = [
        "O‘yin boshida piyodalarni d4 yoki e4 ga chiqaring. ♟️",
        "Rokada qilib shohni xavfsiz joyga olib boring. ♔",
        "Markazni nazorat qilish uchun otlardan foydalaning. ♘",
        "Hujumda fillardan strategik foydalaning. ♗",
      ];
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      response = `♟️ **Shaxmat maslahati:** ${randomTip}\n\nYana shaxmat bo‘yicha maslahat kerakmi?`;
      sticker = "chess";
    } else if (
      normalizedMsg.includes("astroloji") ||
      normalizedMsg.includes("horoscope") ||
      normalizedMsg.includes("burj")
    ) {
      const signs = [
        "♋ Saraton: Bugun oila bilan vaqt o‘tkazing.",
        "♌ Sher: Rahbarlik qiling, muvaffaqiyat yaqin!",
        "♎ Tarozilar: Muvozanatni saqlang, tinchlik topasiz.",
        "♏ Chayon: Sirli fikrlaringizni oching.",
      ];
      const randomSign = signs[Math.floor(Math.random() * signs.length)];
      response = `🌟 **Astroloji maslahati:** ${randomSign}\nBurjingizni aytsangiz, aniqroq maslahat bera olaman!`;
      sticker = "horoscope";
    } else if (
      normalizedMsg.includes("kitob") ||
      normalizedMsg.includes("book") ||
      normalizedMsg.includes("o‘qish")
    ) {
      const books = [
        '"Alkimyogar" (Paulo Koelyo) - o‘z yo‘lini izlovchilar uchun. 📘',
        '"Shum bola" (G‘afur G‘ulom) - o‘zbek adabiyoti klassikasi. 📙',
        '"1984" (George Orwell) - totalitarizm haqida. 📗',
        '"O‘tgan kunlar" (Abdulla Qodiriy) - tarixiy roman. 📕',
      ];
      const randomBook = books[Math.floor(Math.random() * books.length)];
      response = `📚 **Kitob tavsiyasi:** ${randomBook}\nYana malumot beraymi? (Ha/Yo‘q)`;
      sticker = "book";
    } else if (
      normalizedMsg.includes("xarajat") ||
      normalizedMsg.includes("budget") ||
      normalizedMsg.includes("pul")
    ) {
      response = `💸 **Xarajatlar maslahati:**\n- 50% ehtiyoj (uy, oziq-ovqat)\n- 30% xohish (sayohat, o‘yin-kulgi)\n- 20% jamg‘arma\n\nShaxsiy budjetingiz bo‘yicha yordam kerakmi?`;
      sticker = "budget";
    } else if (
      normalizedMsg.includes("ovoz") ||
      normalizedMsg.includes("voice") ||
      normalizedMsg.includes("audio")
    ) {
      response = `🎙️ **Ovozli xabar (mock):** "Salom, bu ovozli xabar! Qanday yordam bera olaman?"\n\nYana ovozli xabar yuborishni xohlaysizmi?`;
      sticker = "voice";
    } else if (
      normalizedMsg.includes("rasm") ||
      normalizedMsg.includes("image") ||
      normalizedMsg.includes("tahlil")
    ) {
      response = `📸 **Rasm tahlil (mock):** Bu rasmda quyoshli plyaj va dengiz ko‘rinadi.\n\nYana rasm tahlil qilishni xohlaysizmi?`;
      sticker = "image";
    } else if (
      normalizedMsg.includes("random") ||
      normalizedMsg.includes("tasodifiy")
    ) {
      const randomNum = Math.floor(Math.random() * 100);
      response = `🎲 **Tasodifiy raqam:** ${randomNum}\n\nYana tasodifiy raqam chiqaraymi?`;
      sticker = "random";
    } else if (
      normalizedMsg.includes("kalendar") ||
      normalizedMsg.includes("taqvim")
    ) {
      response = `📅 **Bugungi sana:** ${new Date().toLocaleDateString(
        "uz-UZ"
      )}\n\nBoshqa kun haqida ma’lumot kerakmi?`;
      sticker = "calendar";
    } else if (
      normalizedMsg.includes("telegram") ||
      normalizedMsg.includes("instagram") ||
      normalizedMsg.includes("contact") ||
      normalizedMsg.includes("bog‘lan")
    ) {
      response = `📞 **Biz bilan bog‘laning:**\n<div className="mt-2 flex items-center gap-2"><a href="https://t.me/snovden_01" target="_blank" className="inline-flex items-center px-3 py-1.5 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600"><FaTelegram className="mr-1 text-sm" />Telegram</a></div>\n<div className="mt-2 flex items-center gap-2"><a href="https://instagram.com/cybernexus" target="_blank" className="inline-flex items-center px-3 py-1.5 bg-pink-500 text-white rounded-full text-sm hover:bg-pink-600"><FaInstagram className="mr-1 text-sm" />Instagram</a></div>\n<div className="mt-2 flex items-center gap-2"><a href="tel:+998935188508" className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200"><FaPhone className="mr-1 text-sm" />+998 93 518 85 08</a></div>`;
      sticker = "default";
      isSocialMedia = true;
    } else if (
      normalizedMsg.includes("yordam") ||
      normalizedMsg.includes("help")
    ) {
      response = `❓ **Yordam:** Men quyidagi sohalarda yordam bera olaman:\n- Hisob-kitob, tarjima, qidiruv\n- Kod yozish, ob-havo, vaqt\n- Maslahatlar (hayotiy, sog‘liq, sayohat)\n- Eslatmalar, musiqa, shou, retsept, kitob tavsiyalari\n- Ovozli xabar va rasm tahlil (mock)\n\nQanday yordam kerak?`;
      sticker = "help";
    } else if (
      normalizedMsg.includes("salom") ||
      normalizedMsg.includes("hi") ||
      normalizedMsg.includes("assalom")
    ) {
      response = `👋 Salom, ${
        userMemory.name || "do‘stim"
      }! Qanday yordam bera olaman?`;
      sticker = "greeting";
    } else if (
      normalizedMsg.includes("rahmat") ||
      normalizedMsg.includes("tashakkur") ||
      normalizedMsg.includes("rakhmat")
    ) {
      response = `😊 Xursand bo‘ldim! Yana nima bilan yordam bersam bo‘ladi?`;
      sticker = "greeting";
    } else {
      response = `🤔 Tushunmadim, lekin harakat qilaman! CyberNexus jamoasiga murojaat qilish uchun:\n<div className="mt-2  flex items-center gap-2"><a href="https://t.me/snovden_01" target="_blank" className="inline-flex items-center px-3 py-1.5 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600"><FaTelegram className="mr-1 text-sm" />Telegram</a></div>\n<div className="mt-2 flex items-center gap-2"><a href="https://instagram.com/cybernexus" target="_blank" className="inline-flex items-center px-3 py-1.5 bg-pink-500 text-white rounded-full text-sm hover:bg-pink-600"><FaInstagram className="mr-1 text-sm" />Instagram</a></div>\n<div className="mt-2 flex items-center gap-2"><a href="tel:+998935188508" className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200"><FaPhone className="mr-1 text-sm" />+998 93 518 85 08</a></div>`;
      sticker = "default";
      isSocialMedia = true;
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
    return { text: response, sticker, isSocialMedia };
  };

  const startNewChat = () => {
    const filteredMessages = messages.filter(
      (msg) =>
        msg.text !== "Yangi chat boshlandi! Qanday yordam berishim mumkin?"
    );
    if (
      filteredMessages.length > 0 &&
      !chatHistory.some((chat) => chat.id === currentChatId)
    ) {
      setChatHistory((prev) =>
        [...prev, { id: currentChatId, messages: filteredMessages }].slice(-6)
      );
    }
    setMessages([
      {
        text: "Yangi chat boshlandi! Qanday yordam berishim mumkin?",
        sender: "ai",
        time: new Date(),
        sticker: "greeting",
        final: true,
      },
    ]);
    const maxId =
      chatHistory.length > 0
        ? Math.max(...chatHistory.map((chat) => chat.id))
        : 0;
    setCurrentChatId(maxId + 1);
    setShowHistory(false);
    setContext([]);
    setUserMemory({ name: "", interests: [], reminders: [], dailyTips: [] });
    setSelectedChats([]);
  };

  const handleSearch = () => {
    setShowSearchModal(true);
  };

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
    setInput("");
    setShowSearchModal(false);
  };

  const handleSearchSubmit = () => {
    if (!input.trim() || !selectedPlatform) return;

    let searchUrl = "";
    let platformName = "";
    let icon;

    switch (selectedPlatform) {
      case "google":
        searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
          input
        )}`;
        platformName = "Google’da";
        icon = <FaGoogle className="mr-1 text-sm text-blue-500" />;
        break;
      case "youtube":
        searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
          input
        )}`;
        platformName = "YouTube’da";
        icon = <FaYoutube className="mr-1 text-sm text-red-500" />;
        break;
      case "instagram":
        searchUrl = `https://www.instagram.com/${encodeURIComponent(input)}/`;
        platformName = "Instagram’da";
        icon = <FaInstagram className="mr-1 text-sm text-pink-500" />;
        break;
      case "telegram":
        searchUrl = `https://t.me/${encodeURIComponent(input)}`;
        platformName = "Telegram’da";
        icon = <FaTelegram className="mr-1 text-sm text-blue-400" />;
        break;
      case "github":
        searchUrl = `https://github.com/${encodeURIComponent(input)}`;
        platformName = "GitHub’da";
        icon = <FaGithub className="mr-1 text-sm text-gray-800" />;
        break;
      default:
        return;
    }

    setMessages((prev) => [
      ...prev,
      {
        text: `Sizning qidiruv so‘rovingiz: "${input}"\n<a href="${searchUrl}" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600">${platformName} qidirish</a>`,
        sender: "ai",
        time: new Date(),
        sticker: "search",
        final: true,
      },
    ]);
    setSelectedPlatform(null);
    setInput("");
  };

  const handleTouchStart = (chatId) => {
    setTouchStart(
      setTimeout(() => {
        setSelectedChats((prev) =>
          prev.includes(chatId)
            ? prev.filter((id) => id !== chatId)
            : [...prev, chatId]
        );
      }, 2000)
    );
  };

  const handleTouchEnd = () => {
    if (touchStart) {
      clearTimeout(touchStart);
      setTouchStart(null);
    }
  };

  const handleContextMenu = (chatId, e) => {
    e.preventDefault();
    setSelectedChats((prev) =>
      prev.includes(chatId)
        ? prev.filter((id) => id !== chatId)
        : [...prev, chatId]
    );
  };

  const handleDeleteChats = () => {
    setChatHistory((prev) =>
      prev.filter((chat) => !selectedChats.includes(chat.id)).slice(-6)
    );
    setSelectedChats([]);
    localStorage.setItem(
      "chatHistory",
      JSON.stringify(
        chatHistory.filter((chat) => !selectedChats.includes(chat.id))
      )
    );
    if (chatHistory.length === selectedChats.length) setCurrentChatId(1);
  };

  return (
    <div
      className={classNames(
        "min-h-screen mt-[-70px] sm:mt-[-50px] flex items-center justify-center p-2 overflow-hidden",
        {
          "bg-background-light": mode === "light",
          "bg-background-dark": mode === "dark",
        }
      )}
    >
      <div
        className={classNames(
          "w-full max-w-5xl h-[75vh] sm:h-[80vh] flex flex-col rounded-3xl border overflow-hidden",
          {
            "bg-white border-gray-200": mode === "light",
            "bg-gray-900 border-gray-700": mode === "dark",
          }
        )}
      >
        {/* Header */}
        <div
          className={classNames(
            "flex justify-between items-center p-4 border-b rounded-t-3xl",
            {
              "border-gray-200": mode === "light",
              "border-gray-700": mode === "dark",
            }
          )}
        >
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className={classNames("lg:hidden text-xl", {
                "text-gray-500 hover:text-gray-700": mode === "light",
                "text-gray-300 hover:text-gray-100": mode === "dark",
              })}
            >
              <FaBars />
            </button>
            <h1
              className={classNames("text-lg font-medium", {
                "text-gray-800": mode === "light",
                "text-gray-100": mode === "dark",
              })}
            >
              CyberNexus AI
            </h1>
          </div>
          <div className="flex gap-3">
            <button
              onClick={toggleMode}
              className={classNames("text-xl", {
                "text-gray-500 hover:text-gray-700": mode === "light",
                "text-gray-300 hover:text-gray-100": mode === "dark",
              })}
            ></button>
            <button
              onClick={handleSearch}
              className={classNames("text-xl", {
                "text-gray-500 hover:text-gray-700": mode === "light",
                "text-gray-300 hover:text-gray-100": mode === "dark",
              })}
            >
              <FaSearch />
            </button>
            <button
              onClick={startNewChat}
              className={classNames("text-xl", {
                "text-gray-500 hover:text-gray-700": mode === "light",
                "text-gray-300 hover:text-gray-100": mode === "dark",
              })}
            >
              <FaPlus />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Chat History (Desktop) */}
          <div
            className={classNames("hidden lg:block w-1/3 border-r", {
              "border-gray-200": mode === "light",
              "border-gray-700": mode === "dark",
            })}
          >
            <div className="p-4 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white">
              <div className="flex justify-between items-center mb-3">
                <h2
                  className={classNames("text-base font-medium", {
                    "text-gray-900": mode === "light",
                    "text-gray-100": mode === "dark",
                  })}
                >
                  Chat Tarixi
                </h2>
                {selectedChats.length > 0 && (
                  <button
                    onClick={handleDeleteChats}
                    className="text-red-500 hover:text-red-600"
                  >
                    <FaTrash className="text-sm" />
                  </button>
                )}
              </div>
              {chatHistory.length === 0 ? (
                <p
                  className={classNames("text-sm", {
                    "text-gray-500": mode === "light",
                    "text-gray-400": mode === "dark",
                  })}
                >
                  Hozircha chatlar yo‘q
                </p>
              ) : (
                chatHistory
                  .slice()
                  .reverse()
                  .map((chat, index) => (
                    <motion.div
                      key={chat.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={classNames(
                        "p-3 mb-1 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-300",
                        {
                          "bg-blue-50 border border-blue-100":
                            selectedChats.includes(chat.id),
                          "border-l-4 border-blue-500 bg-blue-50":
                            chat.id === currentChatId,
                        },
                        {
                          "hover:bg-gray-50": mode === "light",
                          "hover:bg-gray-800": mode === "dark",
                        }
                      )}
                      onClick={() => setMessages(chat.messages || [])}
                      onTouchStart={() => handleTouchStart(chat.id)}
                      onTouchEnd={handleTouchEnd}
                      onContextMenu={(e) => handleContextMenu(chat.id, e)}
                    >
                      <span
                        className={classNames("text-sm font-medium", {
                          "text-gray-700": mode === "light",
                          "text-gray-300": mode === "dark",
                        })}
                      >
                        {chatHistory.length - index}. Chat #{chat.id}
                      </span>{" "}
                      -
                      <span
                        className={classNames("text-xs", {
                          "text-gray-500": mode === "light",
                          "text-gray-400": mode === "dark",
                        })}
                      >
                        {" "}
                        {chat.messages && chat.messages.length > 0
                          ? chat.messages[0].text.slice(0, 20)
                          : "Chat bo‘sh"}
                        ...
                      </span>
                    </motion.div>
                  ))
              )}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white">
              <AnimatePresence>
                {memoizedMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    } mb-3`}
                  >
                    <div
                      className={classNames(
                        "max-w-[80%] p-3 rounded-2xl",
                        {
                          "bg-blue-500 text-white": msg.sender === "user",
                          "bg-gray-200 text-gray-800":
                            msg.sender !== "user" && mode === "light",
                          "bg-gray-700 text-gray-100":
                            msg.sender !== "user" && mode === "dark",
                        },
                        { "animate-pulse": !msg.final }
                      )}
                    >
                      <div
                        className="text-sm leading-relaxed break-words"
                        dangerouslySetInnerHTML={{ __html: msg.text }}
                      />
                      {msg.sticker && msg.final && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="text-lg ml-2 inline-block"
                        >
                          {getSticker(msg.sticker)}
                        </motion.span>
                      )}
                      <div
                        className={classNames("text-xs opacity-60 mt-1", {
                          "text-gray-300": mode === "dark",
                          "text-gray-600": mode === "light",
                        })}
                      >
                        {new Date(msg.time).toLocaleTimeString("uz-UZ")}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div
              className={classNames("p-4 border-t", {
                "border-gray-200": mode === "light",
                "border-gray-700": mode === "dark",
              })}
            >
              <div className="flex items-center gap-1 sm:gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" &&
                    (selectedPlatform ? handleSearchSubmit() : handleSend())
                  }
                  className={classNames(
                    "flex-1 p-3 rounded-full border focus:outline-none focus:ring-1 text-sm",
                    {
                      "bg-white border-gray-200 text-gray-800 focus:ring-gray-300 placeholder-gray-400":
                        mode === "light",
                      "bg-gray-800 border-gray-600 text-gray-100 focus:ring-gray-500 placeholder-gray-500":
                        mode === "dark",
                    }
                  )}
                  placeholder={
                    selectedPlatform
                      ? `Qidirish uchun "${selectedPlatform}" so‘rovini kiriting...`
                      : "Savol yozing yoki buyruq bering..."
                  }
                />
                <button
                  onClick={selectedPlatform ? handleSearchSubmit : handleSend}
                  className={classNames(
                    "p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300",
                    {
                      "opacity-50 cursor-not-allowed": !input.trim(),
                    }
                  )}
                  disabled={!input.trim()}
                >
                  <FaPaperPlane className="text-sm" />
                </button>
                {suggestions.length > 0 && (
                  <div className="mb-3 flex gap-2 flex-wrap">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => setInput(suggestion)}
                        className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 hover:bg-blue-200"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div
          className={classNames(
            "flex justify-around p-4 border-t rounded-b-3xl",
            {
              "border-gray-200": mode === "light",
              "border-gray-700": mode === "dark",
            }
          )}
        >
          {[
            {
              icon: FaNewspaper,
              text: "App",
              link: "/premium-app",
              desc: "Premium ilovamizni yuklang!",
            },
            {
              icon: FaInfoCircle,
              text: "About",
              link: "/about",
              desc: "Biz haqimizda",
            },
            {
              icon: FaPhone,
              text: "Contact",
              link: "/contact",
              desc: "Bog‘lanish",
            },
            {
              icon: FaQuestionCircle,
              text: "Help",
              link: "/help",
              desc: "Yordam",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={`https://cybernexus.uz${item.link}`}
              className={classNames("flex flex-col items-center", {
                "text-gray-500 hover:text-blue-500": mode === "light",
                "text-gray-300 hover:text-blue-400": mode === "dark",
              })}
              title={item.desc}
            >
              <item.icon className="text-lg" />
              <span className="text-xs mt-1">{item.text}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile History Modal */}
      {showHistory && (
        <div className="lg:hidden fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={classNames(
              "w-11/12 max-h-[70vh] p-4 rounded-2xl shadow-xl overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white",
              {
                "bg-white": mode === "light",
                "bg-gray-900": mode === "dark",
              }
            )}
          >
            <div className="flex justify-between items-center mb-3">
              <h2
                className={classNames("text-base font-medium", {
                  "text-gray-900": mode === "light",
                  "text-gray-100": mode === "dark",
                })}
              >
                Chat Tarixi
              </h2>
              {selectedChats.length > 0 && (
                <button
                  onClick={handleDeleteChats}
                  className="text-red-500 hover:text-red-600"
                >
                  <FaTrash className="text-sm" />
                </button>
              )}
            </div>
            {chatHistory.length === 0 ? (
              <p
                className={classNames("text-sm", {
                  "text-gray-500": mode === "light",
                  "text-gray-400": mode === "dark",
                })}
              >
                Hozircha chatlar yo‘q
              </p>
            ) : (
              chatHistory
                .slice()
                .reverse()
                .map((chat, index) => (
                  <motion.div
                    key={chat.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={classNames(
                      "p-3 mb-1 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-300",
                      {
                        "bg-blue-50 border border-blue-100":
                          selectedChats.includes(chat.id),
                        "border-l-4 border-blue-500 bg-blue-50":
                          chat.id === currentChatId,
                        "hover:bg-gray-50": mode === "light",
                        "hover:bg-gray-800": mode === "dark",
                      }
                    )}
                    onClick={() => {
                      setMessages(chat.messages || []);
                      setShowHistory(false);
                    }}
                    onTouchStart={() => handleTouchStart(chat.id)}
                    onTouchEnd={handleTouchEnd}
                  >
                    <span
                      className={classNames("text-sm font-medium", {
                        "text-gray-700": mode === "light",
                        "text-gray-300": mode === "dark",
                      })}
                    >
                      {chatHistory.length - index}. Chat #{chat.id}
                    </span>{" "}
                    -
                    <span
                      className={classNames("text-xs", {
                        "text-gray-500": mode === "light",
                        "text-gray-400": mode === "dark",
                      })}
                    >
                      {" "}
                      {chat.messages && chat.messages.length > 0
                        ? chat.messages[0].text.slice(0, 20)
                        : "Chat bo‘sh"}
                      ...
                    </span>
                  </motion.div>
                ))
            )}
            <button
              onClick={() => setShowHistory(false)}
              className={classNames(
                "mt-3 w-full p-3 rounded-full text-white text-sm",
                {
                  "bg-blue-500 hover:bg-blue-600": mode === "light",
                  "bg-blue-600 hover:bg-blue-700": mode === "dark",
                }
              )}
            >
              Yopish
            </button>
          </motion.div>
        </div>
      )}

      {/* Search Platform Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={classNames(
              "w-11/12 max-w-sm p-4 rounded-2xl shadow-xl",
              {
                "bg-white": mode === "light",
                "bg-gray-900": mode === "dark",
              }
            )}
          >
            <h2
              className={classNames("text-base font-medium mb-3", {
                "text-gray-900": mode === "light",
                "text-gray-100": mode === "dark",
              })}
            >
              Qayerdan qidirmoqchisiz?
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  platform: "google",
                  icon: <FaGoogle className="text-blue-500" />,
                  name: "Google",
                  color: "bg-blue-500",
                },
                {
                  platform: "youtube",
                  icon: <FaYoutube className="text-red-500" />,
                  name: "YouTube",
                  color: "bg-red-500",
                },
                {
                  platform: "instagram",
                  icon: <FaInstagram className="text-pink-500" />,
                  name: "Instagram",
                  color: "bg-pink-500",
                },
                {
                  platform: "telegram",
                  icon: <FaTelegram className="text-blue-400" />,
                  name: "Telegram",
                  color: "bg-blue-400",
                },
                {
                  platform: "github",
                  icon: <FaGithub className="text-gray-800" />,
                  name: "GitHub",
                  color: "bg-gray-800",
                },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => handlePlatformSelect(item.platform)}
                  className={classNames(
                    "p-3 rounded-lg text-white flex flex-col items-center justify-center hover:opacity-90",
                    item.color
                  )}
                >
                  {item.icon}
                  <span className="text-xs mt-1">{item.name}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowSearchModal(false)}
              className={classNames(
                "mt-4 w-full p-3 rounded-full text-white text-sm",
                {
                  "bg-gray-500 hover:bg-gray-600": mode === "light",
                  "bg-gray-600 hover:bg-gray-700": mode === "dark",
                }
              )}
            >
              Bekor qilish
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
