import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const API_KEY = "dlhFemp7ZZ7qHoe6zWdAcE7ZEH7TbVfhgz5LfOku";
const MAX_IMAGES = 20;

const MarsGallery = () => {
  const [date, setDate] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async (selectedDate = "") => {
    setLoading(true);
    const endpoint = selectedDate
      ? `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${selectedDate}&api_key=${API_KEY}`
      : `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${API_KEY}`;

    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      const images = selectedDate ? data.photos : data.latest_photos;
      setPhotos(images.slice(0, MAX_IMAGES));
    } catch (err) {
      console.error("Xatolik yuz berdi", err);
      setPhotos([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "mars-image.jpg";
    link.click();
  };

  return (
    <div className="min-h-screen bg-black text-neon-green font-mono p-4">
      <h1 className="text-3xl text-center font-bold mb-6 animate-pulse">
        🚀 Nasa Cosmos Gallery
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-gray-900 border border-neon-green text-neon-green rounded px-4 py-2"
        />
        <button
          onClick={() => fetchPhotos(date)}
          className="bg-gradient-to-r text-black from-neon-green to-neon-blue px-6 py-2 rounded shadow hover:scale-105 duration-200"
        >
          Qidirish
        </button>
      </div>

      {loading ? (
        <p className="text-center animate-pulse text-neon-green">
          Yuklanmoqda...
        </p>
      ) : photos.length > 0 ? (
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              className="bg-gray-900 border border-neon-green rounded overflow-hidden shadow-md hover:shadow-xl duration-300"
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={photo.img_src}
                alt="Mars Rover"
                className="w-full aspect-square object-cover"
              />
              <div className="p-2 text-sm">
                <p className="text-neon-green text-center">
                  📅 {photo.earth_date} | 🤖 {photo.rover.name} | 📷{" "}
                  {photo.camera.full_name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-neon-green opacity-60">
          Rasm topilmadi — boshqa sana tanlang.
        </p>
      )}
    </div>
  );
};

export default MarsGallery;
