import { cycleInitialState } from "../../models/Cycles/cycle-initial-state";
import type { CycleState } from "../../models/Cycles/cycle-state";
import { formatSecondsToMinutes } from "../../utils/formatSeconds/format-seconds";
import { getNextCycle } from "../../utils/getNextCycle/get-next-cylcle";
import { CycleActionTypes, type CycleActiontype } from "./cycle-action";

export function cycleReducer(
  state: CycleState,
  action: CycleActiontype,
): CycleState {
  switch (action.type) {
    case CycleActionTypes.START_CYCLE: {
      const newCycle = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newCycle.duration * 60;

      return {
        ...state,
        activeCycle: newCycle,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        cycles: [...state.cycles, newCycle],
      };
    }

    case CycleActionTypes.INTERRUPT_CYCLE: {
      return {
        ...state,
        activeCycle: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        cycles: state.cycles.map((cycle) => {
          if (state.activeCycle && state.activeCycle.id === cycle.id) {
            return {
              ...cycle,
              interruptDate: Date.now(),
            };
          }
          return cycle;
        }),
      };
    }

    case CycleActionTypes.RESET_CYCLE: {
      return { ...cycleInitialState };
    }

    case CycleActionTypes.CHANGE_SETTINGS: {
      return { ...state, config: { ...action.payload } };
    }

    case CycleActionTypes.COUNTDOWN: {
      return {
        ...state,
        secondsRemaining: action.payload.secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(
          action.payload.secondsRemaining,
        ),
      };
    }

    case CycleActionTypes.COMPLETE_CYCLE: {
      return {
        ...state,
        activeCycle: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        cycles: state.cycles.map((cycle) => {
          if (state.activeCycle && state.activeCycle.id === cycle.id) {
            return {
              ...cycle,
              completeDate: Date.now(),
            };
          }
          return cycle;
        }),
      };
    }
  }
  return state;
}
