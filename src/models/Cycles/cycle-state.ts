import type { Cycle } from "./cycle";

export type CycleState = {
  cycles: Cycle[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  currentCycle: number;
  activeCycle: Cycle | null;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
