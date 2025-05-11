import { useState, useEffect } from "react";
import { Routers } from "../router";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    const matrix = document.querySelector(".matrix-rain");
    if (!matrix) return;

    for (let i = 0; i < 100; i++) {
      const span = document.createElement("span");
      span.textContent = String.fromCharCode(0x30a0 + Math.random() * 96); // Matrix-style belgilar
      span.style.left = Math.random() * 100 + "vw";
      span.style.animationDuration = Math.random() * 5 + 5 + "s";
      span.style.animationDelay = Math.random() * 5 + "s";
      matrix.appendChild(span);
    }

    return () => {
      matrix.innerHTML = "";
    };
  }, []);

  const retryConnection = () => {
    if (navigator.onLine) {
      setIsOnline(true);
    } else {
      alert("Hali ham internet yo‘q!");
    }
  };

  return (
    <>
      {isOnline ? (
        <Routers />
      ) : (
        <div className="fixed inset-0 bg-black text-neon-green font-mono flex justify-center items-center z-50 overflow-hidden">
          {/* Scanline & Matrix Rain Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="scanline"></div>
            <div className="matrix-rain"></div>
          </div>

          {/* Terminal-style Message */}
          <div className="z-10 text-center px-6 max-w-xl animate-fade-in-down">
            <div className="text-5xl mb-4 animate-pulse-glow">📡</div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3 tracking-widest uppercase">
              Internet ulanmagan
            </h1>
            <p className="text-sm md:text-base opacity-80 tracking-wide leading-relaxed mb-6">
              Matrix aloqa uzildi. Iltimos, internetingizni tekshiring va
              tizimga qayting.
            </p>
            <button
              onClick={retryConnection}
              className="mt-2 px-6 py-2 rounded-md border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 animate-pulse-glow"
            >
              Qayta urinib ko‘rish
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
