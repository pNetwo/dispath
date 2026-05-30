export type TOWTRUCKS = {
  id: string;
  plate: string;
  model?: string;
  type: "Leve" | "Pesado";
  status: "Disponível" | "Manutenção";
};

export const TOWTRUCKS: TOWTRUCKS[] = [
  {
    id: crypto.randomUUID(),
    plate: "AAA-1111",
    type: "Leve",
    model: "Iveco Daily",
    status: "Disponível",
  },
  {
    id: crypto.randomUUID(),
    plate: "BBB-2222",
    type: "Leve",
    model: "Volkswagen Delivery",
    status: "Disponível",
  },
  {
    id: crypto.randomUUID(),
    plate: "CCC-3333",
    type: "Pesado",
    model: "Ford Cargo 2422",
    status: "Disponível",
  },
  {
    id: crypto.randomUUID(),
    plate: "DDD-4444",
    type: "Leve",
    model: "Volkswagen Delivery",
    status: "Manutenção",
  },
  {
    id: crypto.randomUUID(),
    plate: "EEE-5555",
    type: "Leve",
    model: "Iveco Daily",
    status: "Disponível",
  },
  {
    id: crypto.randomUUID(),
    plate: "FFF-6666",
    type: "Pesado",
    model: "VW 8.160",
    status: "Manutenção",
  },
];
