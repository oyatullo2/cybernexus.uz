import React, { useState, useRef, useEffect } from "react";
import QRCode from "qrcode"; // New import
import { motion, AnimatePresence } from "framer-motion";

const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState("");
  const [qrValue, setQrValue] = useState("");
  const qrRef = useRef(null);
  const canvasRef = useRef(null);

  // QR kodni generatsiya qilish
  const handleGenerate = () => {
    if (!inputText.trim()) {
      alert("Iltimos, matn yoki URL kiriting!");
      return;
    }
    if (!isValidInput(inputText)) {
      alert("Faqat xavfsiz matn yoki URL (http/https) kiriting!");
      return;
    }
    setQrValue(inputText);
  };

  // Xavfsizlik tekshiruvi
  const isValidInput = (text) => {
    const urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;
    return (
      urlPattern.test(text) ||
      !text.includes("javascript:") ||
      !text.includes("data:")
    );
  };

  // QR kodni canvasda chizish
  useEffect(() => {
    if (qrValue && canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        qrValue,
        {
          width: 200,
          margin: 2,
          color: { dark: "#000000", light: "#ffffff" },
        },
        (error) => {
          if (error) console.error("QR Code generation error:", error);
        }
      );
    }
  }, [qrValue]);

  // QR kodni yuklab olish
  const handleDownload = () => {
    if (canvasRef.current) {
      const link = document.createElement("a");
      link.href = canvasRef.current.toDataURL("image/png");
      link.download = "qrcode.png";
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-black font-mono text-neon-green flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      <motion.div
        className="w-full max-w-md bg-black bg-opacity-80 border-2 border-neon-green rounded-lg p-6 shadow-neon"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        whileHover={{ boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)" }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 tracking-wider text-neon-green animate-pulse">
          QR Code Generator
        </h1>
        <p className="text-sm text-neon-green opacity-70 mb-4 text-center">
          URL yoki matn kiriting va xavfsiz QR kod yarating!
        </p>

        {/* Input Formasi */}
        <div className="mb-6">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="https://cybernexus.uz yoki matn"
            className="w-full p-3 bg-gray-900 text-neon-green border border-neon-blue rounded-md focus:outline-none focus:border-neon-green transition-all duration-300"
          />
          <motion.button
            onClick={handleGenerate}
            className="mt-3 w-full bg-gradient-to-r from-neon-green to-neon-blue text-black py-2 rounded-md font-medium hover:from-neon-blue hover:to-neon-green transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            QR Kod Yaratish
          </motion.button>
        </div>

        {/* QR Kod Ko‘rsatilishi */}
        <AnimatePresence>
          {qrValue && (
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <div
                ref={qrRef}
                className="p-4 bg-white rounded-md border-2 border-neon-green shadow-neon animate-glitch"
              >
                <canvas ref={canvasRef} />
              </div>
              <motion.button
                onClick={handleDownload}
                className="mt-4 bg-gradient-to-r from-neon-blue to-neon-green text-black py-2 px-6 rounded-md font-medium hover:from-neon-green hover:to-neon-blue transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Yuklab Olish
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Xavfsizlik Maslahati */}
        <p className="text-xs text-neon-green opacity-60 mt-6 text-center">
          Ogohlantirish: Faqat ishonchli URL’lardan foydalaning. Noma'lum QR
          kodlarni skan qilmang!
        </p>
      </motion.div>
    </div>
  );
};

export default QRCodeGenerator;
