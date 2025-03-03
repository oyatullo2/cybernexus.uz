import { Outlet } from "react-router-dom";
import { WelcomeHeader } from "./Header";
export const Layout = () => {
  return (
    <>
      <WelcomeHeader />
      <Outlet />
    </>
  );
};
