import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routers } from "../router";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const navigate = useNavigate();

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

  // Sayt yangi ochilganda bir marta /captcha ga yo‘naltirish
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (window.location.pathname === "/faq" && !hasVisited) {
      sessionStorage.setItem("hasVisited", "true"); // Bir marta kirgani belgilandi
      navigate("/captcha");
    }
  }, [navigate]);

  return (
    <>
      {isOnline ? (
        <Routers />
      ) : (
        <div className="fixed inset-0 w-full h-screen bg-gray-200 flex justify-center items-center z-50">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center max-w-[90%] w-[400px] animate-fade-in border border-gray-200">
            <div className="text-5xl mb-4 text-blue-400 animate-pulse">📡</div>
            <h1 className="text-gray-700 text-xl md:text-2xl font-semibold mb-4">
              Internet aloqasi yo‘q
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Iltimos, internet aloqangizni tekshiring va qayta urinib ko‘ring.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;