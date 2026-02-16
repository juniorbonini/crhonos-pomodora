import type { Cycle } from "../../models/Cycles/cycle";
import type { CycleState } from "../../models/Cycles/cycle-state";

export enum CycleActionTypes {
  START = "START",
  COMPLETE = "COMPLETE",
  INTERRUPT = "INTERRUPT",
  RESET = "RESET",
  COUNTDOWN = "COUNTDOWN",
  CHANGE = "CHANGE",
}

export type CycleActionWithPayload =
  | {
      type: CycleActionTypes.START;
      payload: Cycle;
    }
  | {
      type: CycleActionTypes.COUNTDOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: CycleActionTypes.CHANGE;
      payload: CycleState["config"];
    };

export type CycleActionWithoutPayload =
  | {
      type: CycleActionTypes.COMPLETE;
    }
  | {
      type: CycleActionTypes.INTERRUPT;
    }
  | {
      type: CycleActionTypes.RESET;
    };

export type CycleActiontype =
  | CycleActionWithPayload
  | CycleActionWithoutPayload;
