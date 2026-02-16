import type { Dispatch, ReactNode } from "react";
import type { CycleState } from "./cycle-state"

export type CycleContextData = {
  state: CycleState;
  dispatch: Dispatch<CycleActionType>;
}

export type CycleContextProviderProps = {
  children: ReactNode;
}
