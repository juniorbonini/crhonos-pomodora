import type { Cycle } from "../../models/Cycles/cycle";
import type { CycleState } from "../../models/Cycles/cycle-state";

export enum CycleActionTypes {
  START_CYCLE = "START",
  COMPLETE_CYCLE = "COMPLETE",
  INTERRUPT_CYCLE = "INTERRUPT",
  RESET_CYCLE = "RESET",
  COUNTDOWN = "COUNTDOWN",
  CHANGE_SETTINGS = "CHANGE",
}

export type CycleActionWithPayload =
  | {
      type: CycleActionTypes.START_CYCLE;
      payload: Cycle;
    }
  | {
      type: CycleActionTypes.COUNTDOWN;
      payload: { secondsReamaining: number };
    }
  | {
      type: CycleActionTypes.CHANGE_SETTINGS;
      payload: CycleState["config"];
    };

export type CycleActionWithoutPayload =
  | {
      type: CycleActionTypes.COMPLETE_CYCLE;
    }
  | {
      type: CycleActionTypes.INTERRUPT_CYCLE;
    }
  | {
      type: CycleActionTypes.RESET_CYCLE;
    };

export type CycleActiontype =
  | CycleActionWithPayload
  | CycleActionWithoutPayload;
