import { Outlet } from "react-router-dom";
import { WelcomeHeader } from "./Header";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      <div className="w-full flex flex-col min-h-screen bg-black overflow-x-hidden">
        <WelcomeHeader />
        <div
          className={classNames(
            "w-full h-full overflow-y-auto pr-14 sm:pr-16",
            {
              "animate-[fade-in_1s_ease-in-out]":
                location.pathname !== "/cyberflow",
            }
          )}
        >
          <Outlet />
        </div>
        {/* Responsive Hackerona Download Button */}
        <a
          href="/app-release.apk" // Fayl public papkasida joylashgan
          download
          className={classNames(
            "fixed bottom-2 right-2 z-50 flex items-center gap-1 rounded-md bg-gradient-to-r from-green-500 to-cyan-500 text-black font-mono shadow-[0_0_10px_#0ff] transition-all duration-300",
            "sm:bottom-4 sm:right-4 sm:gap-2", // Kompyuter ekranlari uchun
            "px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm", // Padding va font o'lchami
            "active:shadow-[0_0_20px_#0ff] active:animate-glitch" // Mobil uchun tap effekti
          )}
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
          <span className="hidden sm:inline">Download CyberNexus</span>
          <span className="inline sm:hidden">Download</span>
        </a>
      </div>
      {/* Glitch animatsiyasi uchun CSS */}
      <style>
        {`
          @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }
          .animate-glitch {
            animation: glitch 0.3s ease;
          }
        `}
      </style>
    </>
  );
};
