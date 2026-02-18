import styles from "./style.module.css";
import {
  ClockClockwiseIcon,
  GearIcon,
  HouseIcon,
  MoonIcon,
  SunIcon,
  TimerIcon,
} from "@phosphor-icons/react";
import { Button } from "../Button";
import { useNavigate } from "react-router";
import { Heading } from "../Heading";
import { useThemeContext } from "../../context/ThemeContext/theme-context";

export function Menu() {
  const { onToggleTheme, theme } = useThemeContext();
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <TimerIcon />
        <Heading>Pomodora</Heading>
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
        <Button size="sm" onClick={onToggleTheme}>
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </div>
    </>
  );
}
