import { useEffect, useState } from "react";
import type {
  ThemeContextProps,
  ThemeProviderProps,
} from "../../types/ThemeProvider/theme-provider";
import { ThemeContext } from "./theme-context";

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeContextProps["theme"]>("light");

  function onToggleIcon() {
    setTheme((prevIcon) => (prevIcon === "light" ? "dark" : "light"));
  }

  function onToggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme,
        onToggleIcon,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
