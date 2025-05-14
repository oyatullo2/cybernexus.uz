import React, { useState } from "react";
import { motion } from "framer-motion";

const Base64Tool = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleEncode = () => {
    try {
      setResult(btoa(input));
    } catch {
      setResult("Xatolik: Faqat UTF-8 matn kiriting.");
    }
  };

  const handleDecode = () => {
    try {
      setResult(atob(input));
    } catch {
      setResult("Xatolik: Yaroqli Base64 kod kiriting.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-neon-green font-mono flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-2xl bg-black bg-opacity-80 border-2 border-neon-green rounded-lg p-6 shadow-neon"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-center mb-4 animate-pulse">
          Base64 Encoder / Decoder
        </h2>
        <textarea
          className="w-full p-3 bg-gray-900 text-neon-green border border-neon-blue rounded-md focus:outline-none focus:border-neon-green mb-4"
          rows={4}
          placeholder="Matn kiriting yoki Base64 kod..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <motion.button
            onClick={handleEncode}
            className="w-full sm:w-1/2 py-2 bg-gradient-to-r from-neon-green to-neon-blue text-black rounded-md font-semibold"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
          >
            Encode
          </motion.button>
          <motion.button
            onClick={handleDecode}
            className="w-full sm:w-1/2 py-2 bg-gradient-to-r from-neon-blue to-neon-green text-black rounded-md font-semibold"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
          >
            Decode
          </motion.button>
        </div>
        <p className="text-sm text-neon-green opacity-70 mb-2">Natija:</p>
        <div className="p-3 bg-gray-800 text-white rounded-md break-words max-h-60 overflow-auto">
          {result}
        </div>
      </motion.div>
    </div>
  );
};

export default Base64Tool;
