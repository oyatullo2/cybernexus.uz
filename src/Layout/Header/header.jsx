import { Link } from "react-router-dom";
import classNames from "classnames";
import { useContext, useState, useEffect, useRef } from "react";
import { GlobalContext } from "../../GlobalState/globalstate";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

export const WelcomeHeader = () => {
  const [open, setOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [isVideoWatched, setIsVideoWatched] = useState(
    localStorage.getItem("isVideoWatched") === "true" // localStorage dan o‘qish
  );
  const [currentTime, setCurrentTime] = useState(0);
  const { mode, setMode } = useContext(GlobalContext);
  const dropdownRef = useRef(null);
  const menuButtonRef = useRef(null);
  const location = useLocation();
  const storyRef = useRef(null);
  const playerRef = useRef(null);

  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  // Mobil uchun touch handlerlar
  const handleTouchStart = () => {
    if (playerRef.current) {
      playerRef.current.getInternalPlayer().pause();
    }
  };

  const handleTouchEnd = () => {
    if (playerRef.current) {
      playerRef.current.getInternalPlayer().play();
    }
  };

  // Kompyuter uchun klaviatura handlerlar
  const handleKeyDown = (e) => {
    if (e.key === " " && playerRef.current) {
      e.preventDefault();
      playerRef.current.getInternalPlayer().pause();
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === " " && playerRef.current) {
      playerRef.current.getInternalPlayer().play();
    }
  };

  // Video progressini yangilash va ko‘rilganligini belgilash
  const handleProgress = (state) => {
    setCurrentTime(Math.floor(state.playedSeconds));
    if (state.playedSeconds >= 1 && !isVideoWatched) {
      setIsVideoWatched(true);
      localStorage.setItem("isVideoWatched", "true"); // localStorage ga saqlash
    }
  };

  // Video tayyor bo‘lganda ijro etishni ta’minlash
  const handleReady = () => {
    if (playerRef.current && !isVideoWatched) {
      playerRef.current.getInternalPlayer().play();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
      if (
        storyOpen &&
        storyRef.current &&
        !storyRef.current.contains(event.target)
      ) {
        setStoryOpen(false);
      }
    };

    if (storyOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      document.body.style.overflow = "auto";
    };
  }, [open, storyOpen]);

  return (
    <div
      style={{ display: location.pathname === "/captcha" ? "none" : "flex" }}
      className={classNames(
        "w-full gap-3 shadow-sm header-container px-[10px] py-[5px] items-center flex justify-between"
      )}
    >
      <div className="w-full max-w-fit flex items-center gap-4">
        <Link to={"/"}>
          <p
            className="font-[700] hover:shadow-none cursor-pointer max-w-fit text-[25px]"
            style={{
              textShadow:
                mode === "light"
                  ? "-3px 3px 3.5px rgba(0, 0, 0, 0.35)"
                  : "-3px 3px 3.5px rgba(255, 255, 255, 0.35)",
            }}
          >
            CyberNexus
          </p>
        </Link>
        <div
          className={classNames(
            "w-12 h-12 rounded-full border-4 flex items-center justify-center cursor-pointer relative transition-all duration-300",
            {
              "border-blue-400": !isVideoWatched,
              "border-transparent": isVideoWatched,
            }
          )}
          onClick={() => setStoryOpen(true)}
        >
          <img
            src="/cybernexus.png"
            alt="Story Thumbnail"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="absolute bottom-[1.2px] right-[4px] bg-blue-500 text-white text-xs font-bold px-1 py-0.25 rounded-full">
            ✓
          </span>
        </div>
      </div>

      {/* Desktopdagi linklar */}
      <div className="relative w-full hidden md:flex gap-2 max-w-[700px] font-[500] text-[17.5px] justify-between items-center">
        <Link to={"/premium-app"}>
          <p className="cursor-pointer">App</p>
        </Link>
        <Link to={"/news"}>
          <p className="cursor-pointer">News</p>
        </Link>
        <Link to={"/about"}>
          <p className="cursor-pointer">About</p>
        </Link>
        <Link to={"/contact"}>
          <p className="cursor-pointer">Contact</p>
        </Link>
        <Link to={"/help"}>
          <p className="cursor-pointer">Help</p>
        </Link>
        <Link to={"/cyberflow"}>
            <p className="cursor-pointer">Cyberflow</p>
          </Link>
        <label htmlFor="mode" onClick={handleMode}>
          <div
            className={classNames(
              "w-[55px] h-[23px] transition-all duration-500 ease-in-out bg-transparent border-[2px] rounded-[20px] relative",
              {
                "border-orange-500": mode === "light",
                "border-gray-500": mode === "dark",
              }
            )}
          >
            <div
              className={classNames(
                "top-[-2.25px] absolute transition-all duration-500 ease-in-out",
                {
                  "left-[1.5px]": mode === "light",
                  "right-[3px]": mode === "dark",
                }
              )}
            >
              {mode === "light" ? (
                <i
                  className={classNames("fa-solid", "fa-sun", {
                    "text-orange-500": mode === "light",
                  })}
                ></i>
              ) : (
                <i
                  className={classNames("fa-solid", "fa-moon", {
                    "text-gray-500": mode === "dark",
                  })}
                ></i>
              )}
            </div>
          </div>
        </label>
      </div>

      {/* Mobil uchun hamburger menyusi */}
      <div className="w-full md:hidden gap-2 max-w-[700px] font-[500] text-[17.5px] flex justify-end">
        <i
          ref={menuButtonRef}
          onClick={handleOpen}
          className="fa-solid z-10 fa-bars text-[23px] font-[700]"
        ></i>
        <div
          ref={dropdownRef}
          className={classNames(
            "absolute rounded-bl-xl gap-2 pb-[7px] transition-all duration-700 ease-in-out w-full right-0 max-w-[100px] flex flex-col items-center",
            {
              "top-[-250px]": !open,
              "top-[45px]": open,
              "bg-gray-200": mode === "light",
              "bg-[#0F0E0E]": mode === "dark",
            }
          )}
        >
          <Link to={"/premium-app"}>
            <p className="cursor-pointer">App</p>
          </Link>
          <Link to={"/news"}>
            <p className="cursor-pointer">News</p>
          </Link>
          <Link to={"/about"}>
            <p className="cursor-pointer">About</p>
          </Link>
          <Link to={"/contact"}>
            <p className="cursor-pointer">Contact</p>
          </Link>
          <Link to={"/help"}>
            <p className="cursor-pointer">Help</p>
          </Link>
          <Link to={"/cyberflow"}>
            <p className="cursor-pointer">Cyberflow</p>
          </Link>
          <label htmlFor="mode" onClick={handleMode}>
            <div
              className={classNames(
                "w-[55px] h-[23px] transition-all duration-500 ease-in-out bg-transparent border-[2px] rounded-[20px] relative",
                {
                  "border-orange-500": mode === "light",
                  "border-gray-500": mode === "dark",
                }
              )}
            >
              <div
                className={classNames(
                  "top-[-2.0px] absolute transition-all duration-500 ease-in-out",
                  {
                    "left-[1.5px]": mode === "light",
                    "right-[3px]": mode === "dark",
                  }
                )}
              >
                {mode === "light" ? (
                  <i
                    className={classNames("fa-solid", "fa-sun", {
                      "text-orange-500": mode === "light",
                    })}
                  ></i>
                ) : (
                  <i
                    className={classNames("fa-solid", "fa-moon", {
                      "text-gray-500": mode === "dark",
                    })}
                  ></i>
                )}
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Video qismi */}
      {storyOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div
            ref={storyRef}
            className="relative w-[90%] md:w-[40%] rounded-xl overflow-hidden shadow-2xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="absolute top-2 right-2 flex items-center gap-2 z-50">
              <span className="text-white text-sm bg-gray-800 rounded-full px-2 py-1">
                {currentTime}s
              </span>
              <button
                className="text-white text-2xl bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300"
                onClick={() => setStoryOpen(false)}
              >
                ×
              </button>
            </div>
            <ReactPlayer
              ref={playerRef}
              url="/hackathon.mp4"
              playing autoplay // Ko‘rilmagan bo‘lsa avto-play
              controls={false}
              width="100%"
              height="auto"
              onProgress={handleProgress}
              onReady={handleReady} // Video tayyor bo‘lganda ijro etish
              onEnded={() => setStoryOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
