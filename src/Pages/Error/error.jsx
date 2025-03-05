export const Error = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full text-center animate-fade-in border border-gray-200 relative overflow-hidden">
        {/* Gradient overlay effekti */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-pink-50 opacity-30 rounded-2xl pointer-events-none"></div>

        {/* Xato belgisi */}
        <div className="text-7xl md:text-9xl text-red-400 mb-6 mt-[10px] animate-bounce drop-shadow-md">
          ⚠️
        </div>

        {/* Sarlavha */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10">
          404 - Sahifa topilmadi
        </h1>

        {/* Xabar */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 relative z-10">
          Kechirasiz, siz qidirgan manzil noto‘g‘ri yoki mavjud emas. Iltimos,
          URLni tekshiring yoki bosh sahifaga qayting.
        </p>

        {/* Tugmalar */}
        <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
          {/* Cybernexus.uz ga o'tish tugmasi */}
          <a
            href="https://cybernexus.uz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-700 text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-all duration-300 text-sm md:text-base font-medium shadow-md hover:shadow-lg"
          >
            Cybernexus.uz
          </a>
        </div>
      </div>
    </div>
  );
};
