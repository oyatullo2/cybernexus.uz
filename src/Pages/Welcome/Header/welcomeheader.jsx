import { Link } from "react-router-dom";
import classNames from "classnames";
import { useState } from "react";
export const WelcomeHeader = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="w-full gap-3 shadow-sm bg-gray-200 px-[10px] py-[5px] items-center flex justify-between">
        <div className="w-full">
          <Link to={"/"}>
            <p
              className="font-[700] hover:shadow-none cursor-pointer max-w-fit text-[#f04a4f] text-[25px]"
              style={{ textShadow: "-4px 4px 3.5px rgba(0, 0, 0, 0.35)" }}
            >
              CyberNexus
            </p>
          </Link>
        </div>
        <div className="relative w-full text-[#f04a4f] hidden md:flex gap-2 max-w-[700px] font-[500] text-[17.5px] justify-between items-center">
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
        </div>
        <div className="w-full text-[#f04a4f] md:hidden gap-2 max-w-[700px] font-[500] text-[17.5px] flex justify-end">
          <i
            onClick={handleOpen}
            className="fa-solid z-10 fa-bars text-[23px] font-[700]"
          ></i>
          <div
            className={classNames(
              "absolute rounded-bl-xl gap-2 pb-[7px] transition-all duration-700 ease-in-out w-full right-0 max-w-[100px] flex flex-col items-center bg-gray-200",
              {
                "top-[-200px]": !open,
                "top-[45px]": open,
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
          </div>
        </div>
      </div>
    </>
  );
};
