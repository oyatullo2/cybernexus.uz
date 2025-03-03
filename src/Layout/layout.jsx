import { Outlet } from "react-router-dom";
import { WelcomeHeader } from "./Header";
export const Layout = () => {
  return (
    <>
      <div className="w-full flex flex-col overflow-y-hidden overflow-x-hidden">
        <div className="w-full fixed z-10 animate-[header-top-animation_0.5s_ease-in-out]">
          <WelcomeHeader />
        </div>
        <div className="w-full overflow-y-scroll mt-[50px] h-full animate-[header-top-animation_1s_ease-in-out]">
          <Outlet />
        </div>
      </div>
    </>
  );
};
