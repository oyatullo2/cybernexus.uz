// WelcomeHeader.jsx
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useContext, useState, useEffect, useRef } from "react";
import { GlobalContext } from "../../GlobalState/globalstate";

export const WelcomeHeader = () => {
  const [open, setOpen] = useState(false);
  const { mode, setMode } = useContext(GlobalContext);
  const dropdownRef = useRef(null); // Reference to the dropdown div
  const menuButtonRef = useRef(null); // Reference to the hamburger icon

  const handleOpen = (e) => {
    e.stopPropagation(); // Prevent event bubbling to document
    setOpen((prevOpen) => !prevOpen); // Toggle the open state
  };

  const handleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside dropdown AND not on the hamburger icon
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    // Add event listener when dropdown is open
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="w-full gap-3 shadow-sm header-container px-[10px] py-[5px] items-center flex justify-between">
      <div className="w-full max-w-fit">
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
            CyberNexuss
          </p>
        </Link>
      </div>
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
                "top-[-3.5px] absolute transition-all duration-500 ease-in-out",
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
      <div className="w-full md:hidden gap-2 max-w-[700px] font-[500] text-[17.5px] flex justify-end">
        <i
          ref={menuButtonRef} // Reference to the hamburger icon
          onClick={handleOpen}
          className="fa-solid z-10 fa-bars text-[23px] font-[700]"
        ></i>
        <div
          ref={dropdownRef} // Attach ref to the dropdown div
          className={classNames(
            "absolute rounded-bl-xl gap-2 pb-[7px] transition-all duration-700 ease-in-out w-full right-0 max-w-[100px] flex flex-col items-center",
            {
              "top-[-200px]": !open,
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
                  "top-[-3.5px] absolute transition-all duration-500 ease-in-out",
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
    </div>
  );
};
