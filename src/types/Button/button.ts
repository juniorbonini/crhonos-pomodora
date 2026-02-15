import type { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  size?: "sm" | "md";
  variant?: "success" | "danger" | "outline" | "default";
};
