import type { Cycle } from "../../models/Cycles/cycle";

export function getNextCycleType(currentCycle: number): Cycle["type"] {
  if (currentCycle % 8 === 0) return "longBreakTime";
  if (currentCycle % 2 === 0) return "shortBreakTime";
  return "workTime";
}
