import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

const UuidGenerator = () => {
  const [uuid, setUuid] = useState("");

  const generateUuid = () => {
    setUuid(uuidv4());
  };

  return (
    <div className="min-h-screen bg-black text-neon-green font-mono flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-xl bg-black bg-opacity-80 border-2 border-neon-green rounded-lg p-6 shadow-neon"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-center mb-6 animate-pulse">
          UUID Generator
        </h2>
        <motion.button
          onClick={generateUuid}
          className="w-full py-2 bg-gradient-to-r from-neon-green to-neon-blue text-black rounded-md font-semibold mb-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          UUID Yaratish
        </motion.button>
        <div className="p-3 bg-gray-800 text-white rounded-md break-all">
          {uuid}
        </div>
      </motion.div>
    </div>
  );
};

export default UuidGenerator;
