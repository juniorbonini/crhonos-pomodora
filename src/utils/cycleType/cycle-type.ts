export function getCycleType(type: string) {
  const cycleType = {
    workTime: "Foco",
    shortBreakTime: "Descanso curto",
    longBreakTime: "Descanso longo",
  };

  return cycleType[type as keyof typeof cycleType];
}
