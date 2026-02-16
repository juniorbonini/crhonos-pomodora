import { useCycleContext } from "../../context/CycleContext/cycle-context";
import { getNextCycleType } from "../../utils/getNextCycle/get-next-cycle-type";
import { getNextCycle } from "../../utils/getNextCycle/get-next-cylcle";
import styles from "./style.module.css";

export function Cycles() {
  const { state } = useCycleContext();
  const cycleStep = Array.from({ length: state.currentCycle });
  return (
    <>
      <div className={styles.container}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const cycleType = getNextCycleType(nextCycle);

          return (
            <span
              key={nextCycle}
              className={`${styles.cycle} ${styles[cycleType]}`}
            ></span>
          );
        })}
      </div>
    </>
  );
}
