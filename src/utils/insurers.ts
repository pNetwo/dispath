export type INSURER = {
  id: string;
  name: string;
  phone: string;
  email: string;
};

export const INSURERS: INSURER[] = [
  {
    id: crypto.randomUUID(),
    name: "Porto Seguro",
    phone: "(11) 3366-3366",
    email: "contato@portoseguro.com.br",
  },
  {
    id: crypto.randomUUID(),
    name: "Bradesco Seguros",
    phone: "(11) 3004-4777",
    email: "contato@bradescoseguros.com.br",
  },
  {
    id: crypto.randomUUID(),
    name: "Allianz Seguros",
    phone: "(11) 3030-7300",
    email: "contato@allianz.com.br",
  },
  {
    id: crypto.randomUUID(),
    name: "SulAmérica",
    phone: "(11) 3059-5900",
    email: "contato@sulamerica.com.br",
  },
  {
    id: crypto.randomUUID(),
    name: "Mapfre Seguros",
    phone: "(11) 3232-5500",
    email: "contato@mapfre.com.br",
  },
  {
    id: crypto.randomUUID(),
    name: "HDI Seguros",
    phone: "(11) 3366-2323",
    email: "contato@hdi.com.br",
  },
  {
    id: crypto.randomUUID(),
    name: "Tokio Marine",
    phone: "(11) 3232-7600",
    email: "contato@tokiomarine.com.br",
  },
  {
    id: crypto.randomUUID(),
    name: "Azul Seguros",
    phone: "(11) 4004-4433",
    email: "contato@azulseguros.com.br",
  },
];
