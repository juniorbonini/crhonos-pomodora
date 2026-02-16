import styles from "./style.module.css";
import {
  ClockClockwiseIcon,
  GearIcon,
  HouseIcon,
  MoonIcon,
  SunHorizonIcon,
  TimerIcon,
} from "@phosphor-icons/react";
import { Button } from "../Button";
import { useNavigate } from "react-router";
import { Heading } from "../Heading";
import { useEffect, useState } from "react";
import type { ChangeTheme } from "../../types/ChangeTheme/change-theme";

export function Menu() {
  const [theme, setTheme] = useState<ChangeTheme>(() => {
    const storage = localStorage.getItem("theme") as ChangeTheme;
    return storage;
  });
  const nextIcon = {
    dark: <SunHorizonIcon />,
    light: <MoonIcon />,
  };

  function onToggleTheme() {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      return next;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);
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
          {nextIcon[theme]}
        </Button>
      </div>
    </>
  );
}
