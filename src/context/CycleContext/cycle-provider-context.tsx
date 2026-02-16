/* eslint-disable react-hooks/refs */
import { useEffect, useReducer, useRef } from "react";
import { TimerWorkerManager } from "../../workers/TimerManagerWorker/timer-manager-worker";
import { loadBeep } from "../../utils/PlayAudio/play-audio";
import { cycleReducer } from "../CycleReducer/cycle-reducer";
import { cycleInitialState } from "../../models/Cycles/cycle-initial-state";
import type { CycleState } from "../../models/Cycles/cycle-state";
import { CycleActionTypes } from "../CycleReducer/cycle-action";
import { CycleContext } from "./cycle-context";
import type { CycleContextProviderProps } from "../../models/Cycles/cycle-context";

export function CycleProvider({ children }: CycleContextProviderProps) {
  const worker = TimerWorkerManager.getInstance();
  const playBeepAudio = useRef<ReturnType<typeof loadBeep>>(null);
  const [state, dispatch] = useReducer(cycleReducer, cycleInitialState, () => {
    const storage = localStorage.getItem("cycle");

    if (storage === null) return cycleInitialState;

    const parsedStorage = JSON.parse(storage) as CycleState;

    return {
      ...parsedStorage,
      secondsRemaining: 0,
      formattedSecondsRemaining: "00:00",
    };
  });

  worker.onmessage((e) => {
    const countDownSeconds = e.data;
    if (countDownSeconds <= 0) {
      if (playBeepAudio.current) {
        playBeepAudio.current();
        playBeepAudio.current = null;
      }
      dispatch({ type: CycleActionTypes.COMPLETE });
    } else {
      dispatch({
        type: CycleActionTypes.COUNTDOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    localStorage.setItem("cycle", JSON.stringify(state));

    if (!state.activeCycle) {
      worker.terminate();
    }
    document.title = `${state.formattedSecondsRemaining} - Chronos Pomodora`;
    worker.postMessage(state);
  }, [state, worker]);

  useEffect(() => {
    if (state.activeCycle && playBeepAudio.current === null) {
      playBeepAudio.current = loadBeep();
    } else {
      playBeepAudio.current = null;
    }
  }, [state.activeCycle]);
  return (
    <CycleContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CycleContext.Provider>
  );
}
