import type { ComponentProps, ReactNode } from "react";

export type BadgeProps = ComponentProps<"button"> & {
  children: ReactNode;
};
