import type { CycleState } from "./cycle-state";

export type Cycle = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null;
  interruptDate: number | null;
  type: keyof CycleState["config"];
};
