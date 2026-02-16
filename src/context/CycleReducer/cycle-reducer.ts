import type { CycleState } from "../../models/Cycles/cycle-state";
import { CycleActionTypes, type CycleActiontype } from "./cycle-action";

export function cycleReducer(
  state: CycleState,
  action: CycleActiontype,
) {
  switch(action.type) {
    case CycleActionTypes.START_CYCLE: {
      
    }
  }
}
