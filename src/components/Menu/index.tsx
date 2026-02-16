import styles from "./style.module.css";
import {
  ClockClockwiseIcon,
  GearIcon,
  HouseIcon,
  MoonIcon,
  TimerIcon,
} from "@phosphor-icons/react";
import { Button } from "../Button";
import { useNavigate } from "react-router";

export function Menu() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <TimerIcon />
        <h1 style={{ fontSize: 48 }}>Pomodora</h1>
      </div>
      <div className={styles.navContainer}>
        <Button size="sm" onClick={() => navigate("/")}>
          <HouseIcon />
        </Button>
        <Button size="sm" onClick={() => navigate("/history")}>
          <ClockClockwiseIcon />
        </Button>
        <Button size="sm" onClick={() => navigate("/settings")}>
          <GearIcon />
        </Button>
        <Button size="sm">
          <MoonIcon />
        </Button>
      </div>
    </>
  );
}
