import type { Cycle } from "../../models/Cycles/cycle";

export type SortCycleProps = {
  field?: keyof Cycle;
  cycles: Cycle[];
  direction?: "asc" | "desc";
};
