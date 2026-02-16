import type { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  size?: "sm" | "md";
  variant?: "danger" | "outline" | "default";
  onClick?: () => void;
};
