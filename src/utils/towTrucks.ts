export type TOWTRUCKS = {
  id: string;
  plate: string;
  model?: string;
  type: "light" | "heavy";
  status: "available" | "maintenance";
};

export const TOWTRUCKS: TOWTRUCKS[] = [
  {
    id: crypto.randomUUID(),
    plate: "AAA-1111",
    type: "light",
    model: "Iveco Daily",
    status: "available",
  },
  {
    id: crypto.randomUUID(),
    plate: "BBB-2222",
    type: "light",
    model: "Volkswagen Delivery",
    status: "available",
  },
  {
    id: crypto.randomUUID(),
    plate: "CCC-3333",
    type: "heavy",
    model: "Ford Cargo 2422",
    status: "available",
  },
  {
    id: crypto.randomUUID(),
    plate: "DDD-4444",
    type: "light",
    model: "Volkswagen Delivery",
    status: "maintenance",
  },
  {
    id: crypto.randomUUID(),
    plate: "EEE-5555",
    type: "light",
    model: "Iveco Daily",
    status: "available",
  },
  {
    id: crypto.randomUUID(),
    plate: "FFF-6666",
    type: "heavy",
    model: "VW 8.160",
    status: "maintenance",
  },
];
