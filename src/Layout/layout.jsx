import { Outlet } from "react-router-dom";
import { WelcomeHeader } from "../Pages/Welcome/Header";
export const Layout = () => {
  return (
    <>
      <WelcomeHeader />
      <Outlet />
    </>
  );
};
