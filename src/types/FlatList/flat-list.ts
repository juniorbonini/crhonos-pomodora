import type { ReactNode } from "react";

export type FlatListProps<T> = {
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T, index: number) => string;
  data: T[];
};
