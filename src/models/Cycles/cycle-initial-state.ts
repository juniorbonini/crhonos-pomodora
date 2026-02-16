import type { CycleState } from "./cycle-state";

export const cycleInitialState: CycleState = {
  cycles: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeCycle: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};
