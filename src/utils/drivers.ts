export type DRIVER = {
  id: string;
  name: string;
  phone: string;
  license: "C" | "E";
  status: "Disponível" | "Folgando";
};

export const DRIVERS: DRIVER[] = [
  {
    id: crypto.randomUUID(),
    name: "Carlos Silva",
    phone: "(11) 99999-1111",
    license: "C",
    status: "Disponível",
  },
  {
    id: crypto.randomUUID(),
    name: "João Souza",
    phone: "(11) 99999-2222",
    license: "C",
    status: "Disponível",
  },
  {
    id: crypto.randomUUID(),
    name: "Pedro Oliveira",
    phone: "(11) 99999-3333",
    license: "E",
    status: "Folgando",
  },
  {
    id: crypto.randomUUID(),
    name: "Lucas Santos",
    phone: "(11) 99999-4444",
    license: "E",
    status: "Disponível",
  },
  {
    id: crypto.randomUUID(),
    name: "Marcos Costa",
    phone: "(11) 99999-5555",
    license: "C",
    status: "Folgando",
  },
  {
    id: crypto.randomUUID(),
    name: "André Lima",
    phone: "(11) 99999-6666",
    license: "E",
    status: "Disponível",
  },
  {
    id: crypto.randomUUID(),
    name: "Felipe Pereira",
    phone: "(11) 99999-7777",
    license: "C",
    status: "Disponível",
  },
  {
    id: crypto.randomUUID(),
    name: "Bruno Ferreira",
    phone: "(11) 99999-8888",
    license: "C",
    status: "Disponível",
  },
  {
    id: crypto.randomUUID(),
    name: "Diego Rodrigues",
    phone: "(11) 99999-9999",
    license: "C",
    status: "Disponível",
  },
  {
    id: crypto.randomUUID(),
    name: "Rafael Alves",
    phone: "(11) 99999-0000",
    license: "C",
    status: "Disponível",
  },
];
