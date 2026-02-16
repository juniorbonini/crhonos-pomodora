import type { Cycle } from "../../models/Cycles/cycle";

export function getCycleStatus(cycle: Cycle, activeCycle: Cycle | null) {
  if (cycle.completeDate) return "Conclúido";
  if (cycle.interruptDate) return "Interrompido";
  if (cycle.id === activeCycle?.id) return "Em andamento";
  return "Abandonado";
}
