import type { ReactNode } from "react";

export type ThemeContextProps = {
  onToggleTheme: () => void;
  theme: "light" | "dark";
  onToggleIcon?: () => void;
};

export type ThemeProviderProps = {
  children: ReactNode;
};
