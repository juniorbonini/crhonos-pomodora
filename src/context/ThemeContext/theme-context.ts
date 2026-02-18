import { createContext, useContext } from "react";
import type { ThemeContextProps } from "../../types/ThemeProvider/theme-provider";

export const ThemeContext = createContext({} as ThemeContextProps);

export function useThemeContext() {
  const context = useContext(ThemeContext);
  return context;
}
