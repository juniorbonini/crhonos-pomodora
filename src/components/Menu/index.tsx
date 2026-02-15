import styles from "./style.module.css";
import {
  ClockClockwiseIcon,
  GearIcon,
  HouseIcon,
  MoonIcon,
  TimerIcon,
} from "@phosphor-icons/react";
import { Button } from "../Button";

export function Menu() {
  return (
    <>
      <div className={styles.container}>
        <TimerIcon />
        <h1>Chronos Pomodora</h1>
      </div>
      <div className={styles.navContainer}>
        <Button size="sm" variant="default">
          <HouseIcon />
        </Button>
        <Button size="sm" variant="default">
          <ClockClockwiseIcon />
        </Button>
        <Button size="sm" variant="default">
          <GearIcon />
        </Button>
        <Button size="sm" variant="default">
          <MoonIcon />
        </Button>
      </div>
    </>
  );
}
