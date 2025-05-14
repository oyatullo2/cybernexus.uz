import React, { useState } from "react";
import { motion } from "framer-motion";
import * as CryptoJS from "crypto-js"; // MUHIM: default emas, * bilan import

const HashGeneral = () => {
  const [input, setInput] = useState("");
  const [hashType, setHashType] = useState("SHA256");
  const [hash, setHash] = useState("");

  const handleGenerate = () => {
    if (!input.trim()) {
      alert("Iltimos, matn kiriting!");
      return;
    }

    let result = "";
    switch (hashType) {
      case "MD5":
        result = CryptoJS.MD5(input).toString();
        break;
      case "SHA1":
        result = CryptoJS.SHA1(input).toString();
        break;
      case "SHA256":
        result = CryptoJS.SHA256(input).toString();
        break;
      default:
        result = "";
    }
    setHash(result);
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
          Hash Generator
        </h2>
        <textarea
          className="w-full p-3 bg-gray-900 text-neon-green border border-neon-blue rounded-md focus:outline-none focus:border-neon-green mb-4"
          rows={4}
          placeholder="Matn kiriting..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <select
            className="w-full sm:w-1/3 py-2 px-3 bg-gray-800 border border-neon-green rounded-md text-neon-green"
            value={hashType}
            onChange={(e) => setHashType(e.target.value)}
          >
            <option value="MD5">MD5</option>
            <option value="SHA1">SHA1</option>
            <option value="SHA256">SHA256</option>
          </select>
          <motion.button
            onClick={handleGenerate}
            className="w-full sm:w-2/3 py-2 bg-gradient-to-r from-neon-green to-neon-blue text-black rounded-md font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hash Yaratish
          </motion.button>
        </div>
        <p className="text-sm text-neon-green opacity-70 mb-2">Natija:</p>
        <div className="p-3 bg-gray-800 text-white rounded-md break-all max-h-60 overflow-auto">
          {hash}
        </div>
      </motion.div>
    </div>
  );
};

export default HashGeneral;
