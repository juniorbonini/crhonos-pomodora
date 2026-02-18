export type CycleCardProps = {
  name: string;
  startDate: string;
  duration: number;
  type: string;
  status: "Em andamento" | "Concluído" | "Interrompido" | undefined;
};
