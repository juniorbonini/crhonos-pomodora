import { useReducer } from "react";
import type { CycleContextProviderProps } from "../../models/Cycles/cycle-context";
import { CycleContext } from "./cycle-context";
import { cycleInitialState } from "../../models/Cycles/cycle-initial-state";
import { cycleReducer } from "../CycleReducer/cycle-reducer";

export function CycleProvider({ children }: CycleContextProviderProps) {
  const [state, dispatch] = useReducer(cycleReducer, cycleInitialState, () => {

  })
  return <CycleContext.Provider value={{
      
  }}>{children}</CycleContext.Provider>;
}
