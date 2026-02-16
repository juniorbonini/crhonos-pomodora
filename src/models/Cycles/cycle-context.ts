import type { Dispatch, ReactNode } from "react";
import type { CycleState } from "./cycle-state";
import type { CycleActiontype } from "../../context/CycleReducer/cycle-action";

export type CycleContextData = {
  state: CycleState;
  dispatch: Dispatch<CycleActiontype>;
};

export type CycleContextProviderProps = {
  children: ReactNode;
};
