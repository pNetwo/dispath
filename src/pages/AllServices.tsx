import { LayoutHeader } from "../components/LayoutHeader";
import { Service, type ServiceProps } from "../components/Service";
import { formatCurrency } from "../utils/formatCurrency";

import { Banknote, RefreshCw, TrendingUp, Truck } from "lucide-react";

const SERVICE_EXAMPLE: ServiceProps[] = [
  {
    id: "OS-1234",
    status: "Em andamento",
    destiny: "Santos",
    tow: "AAA-1111",
    driver: "João",
    amount: formatCurrency(350.5),
  },
  {
    id: "OS-1234",
    status: "Pendente",
    destiny: "Sorocaba",
    tow: "AAA-1111",
    driver: "João",
    amount: formatCurrency(350.5),
  },
  {
    id: "OS-1234",
    status: "Concluído",
    destiny: "Itapeva",
    tow: "AAA-1111",
    driver: "João",
    amount: formatCurrency(350.5),
  },
  {
    id: "OS-1234",
    status: "Em andamento",
    destiny: "Santos",
    tow: "AAA-1111",
    driver: "João",
    amount: formatCurrency(350.5),
  },
  {
    id: "OS-1234",
    status: "Pendente",
    destiny: "Sorocaba",
    tow: "AAA-1111",
    driver: "João",
    amount: formatCurrency(350.5),
  },
  {
    id: "OS-1234",
    status: "Concluído",
    destiny: "Itapeva",
    tow: "AAA-1111",
    driver: "João",
    amount: formatCurrency(350.5),
  },
  {
    id: "OS-1234",
    status: "Concluído",
    destiny: "Itapeva",
    tow: "AAA-1111",
    driver: "João",
    amount: formatCurrency(350.5),
  },
  {
    id: "OS-1234",
    status: "Concluído",
    destiny: "Itapeva",
    tow: "AAA-1111",
    driver: "João",
    amount: formatCurrency(350.5),
  },
  {
    id: "OS-1234",
    status: "Concluído",
    destiny: "Itapeva",
    tow: "AAA-1111",
    driver: "João",
    amount: formatCurrency(350.5),
  },
];

export function AllServices() {
  const allServices = SERVICE_EXAMPLE.length;
  const invoicing = SERVICE_EXAMPLE[]

  return (
    <div className="w-full lg:max-w-5xl h-full flex flex-col">
      <LayoutHeader
        title="Visão Geral do Mês"
        subtitle="Status de operaçoes do Dispath mensal"
        cards={[
          {
            title: "Total de Serviços",
            value: allServices.toString(),
            iconValue: Truck,
            iconDescription: TrendingUp,
            description: "+23 do último mês",
            descriptionColor: "text-cyan-700",
          },

          {
            title: "Fatura Total",
            value: `R$ ${formatCurrency(23635.5)}`,
            iconValue: Banknote,
            iconDescription: RefreshCw,
            description: "Última atualização 5min atrás ",
            descriptionColor: "text-neutral",
          },
        ]}
      />

      <div>
        <div className="mt-12 border border-zinc-400 rounded-lg bg-slate-50">
          <div>
            <h1 className="text-primary text-2xl font-semibold mt-3 px-3">
              Ordem de Serviço
            </h1>
            <span className="text-neutral text-sm px-3">
              Operações que estão em andamento
            </span>

            <div className="mt-4">
              <div className="grid grid-cols-6 border-t border-b border-zinc-400 gap-2 px-3 py-2 bg-slate-200">
                <span className="text-zinc-700 text-xxs ">OS</span>
                <span className="text-zinc-700 text-xxs ">STATUS</span>
                <span className="text-zinc-700 text-xxs ">DESTINO</span>
                <span className="text-zinc-700 text-xxs ">GUINCHO</span>
                <span className="text-zinc-700 text-xxs ">MOTORISTA</span>
                <span className="text-zinc-700 text-xxs ">Valor</span>
              </div>

              <div className="flex flex-col max-h-76.5 bg-white overflow-y-scroll overflow-hidden">
                {SERVICE_EXAMPLE.map((services) => (
                  <Service
                    className="grid grid-cols-6 gap-2 p-4 hover:bg-slate-300 border-b border-zinc-400 transition ease-linear hover:cursor-pointer"
                    data={services}
                  />
                ))}
              </div>

              <div className="flex justify-center items-center h-12 bg-slate-200 overflow-hidden rounded-b-lg">
                <div className="flex justify-center items-center gap-2">
                  <Truck />
                  <span className="italic">Dispath</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
