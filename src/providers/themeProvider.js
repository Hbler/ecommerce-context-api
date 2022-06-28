import { createContext, useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/styles";

import { themes } from "../styles/theme";

export const ThemeContext = createContext([]);

export default function Theme({ children }) {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("@KenzieShop:theme") || "light";
    setCurrentTheme(savedTheme);
  }, []);

  const getOpositeTheme = useCallback(() => {
    if (currentTheme === "light") {
      localStorage.setItem("@KenzieShop:theme", "light");
      return "dark";
    } else {
      localStorage.setItem("@KenzieShop:theme", "dark");
      return "light";
    }
  }, [currentTheme]);

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <ThemeContext.Provider value={{ setCurrentTheme, getOpositeTheme }}>
        <GlobalStyle />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
