import { createContext, useContext } from "react";
import { cycleInitialState } from "../../models/Cycles/cycle-initial-state";
import type { CycleContextData } from "../../models/Cycles/cycle-context";

const initialCycleContextValue = {
  state: cycleInitialState,
  dispatch: () => {},
};

export const CycleContext = createContext<CycleContextData>(
  initialCycleContextValue,
);

export function useCycleContext() {
  return useContext(CycleContext);
}
