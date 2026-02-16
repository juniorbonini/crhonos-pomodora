import type { ComponentProps, ReactNode } from "react";

export type ButtonProps = Omit<ComponentProps<"button">, "size"> & {
  children: ReactNode;
  size?: "sm" | "md";
  variant?: "danger" | "outline" | "default";
  onClick?: () => void;
};
