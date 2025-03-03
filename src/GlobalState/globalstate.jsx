// globalstate.jsx
import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Initialize mode from localStorage or default to 'light'
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode ? savedMode : "light";
  });

  // Update the document's data-theme attribute whenever mode changes
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