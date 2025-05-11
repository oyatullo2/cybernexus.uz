export const Error = () => {
  return (
    <div className="w-full min-h-screen bg-black font-mono text-neon-green px-4 pt-6 pb-10 overflow-hidden relative">
      {/* Scanline va Matrix Rain effektlari */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="scanline"></div>
        <div className="matrix-rain"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Xato belgisi */}
        <div className="text-7xl md:text-9xl mb-6 animate-bounce animate-pulse-glow">
          ⚠️
        </div>

        {/* Sarlavha */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-pulse-glow">
          404 - Sahifa topilmadi
        </h1>

        {/* Xabar */}
        <p className="max-w-xl text-base md:text-lg leading-relaxed text-neon-green/80 mb-6">
          Kechirasiz, siz qidirgan manzil mavjud emas yoki noto‘g‘ri kiritilgan.
        </p>

        {/* Tugma */}
        <a
          href="https://cybernexus.uz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neon-blue text-black py-2 px-6 rounded-full hover:bg-neon-green hover:text-black transition-all duration-300 font-semibold shadow-lg hover:shadow-neon-green animate-fade-in-down"
        >
          Cybernexus.uz
        </a>
      </div>
    </div>
  );
};
