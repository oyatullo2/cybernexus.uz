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
            "w-full h-full overflow-y-auto pr-14 sm:pr-16", // Adjusted padding
            {
              "animate-[fade-in_1s_ease-in-out]":
                location.pathname !== "/cyberflow",
            }
          )}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};
