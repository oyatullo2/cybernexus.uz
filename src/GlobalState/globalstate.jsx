import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode ? savedMode : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <GlobalContext.Provider value={{ mode, setMode }}>
      {children}
    </GlobalContext.Provider>
  );
};
