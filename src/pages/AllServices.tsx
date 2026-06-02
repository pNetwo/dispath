import { LayoutHeader } from "../components/LayoutHeader";
import { Service, type ServiceProps } from "../components/Service";

import { Banknote, RefreshCw, TrendingUp, Truck } from "lucide-react";
import { useState } from "react";
import { Input } from "../components/Input";
import { Pagination } from "../components/Pagination";
import { formatCurrency } from "../utils/formatCurrency";

const SERVICE_EXAMPLE: ServiceProps[] = [
  {
    id: `12`,
    status: "Em andamento",
    destiny: "Santos",
    tow: "AAA-1111",
    driver: "João",
    amount: 350.5,
  },
];

export function AllServices() {
  const allServices = SERVICE_EXAMPLE.length;

  const [searchService, setSearchService] = useState("");

  const [page, setPage] = useState(1);
  const [totalOfPage, setTotalOfPage] = useState(10);
  const [services, setService] = useState<ServiceProps[]>(SERVICE_EXAMPLE);

  function fetchServices(e: React.SubmitEvent) {
    e.preventDefault();

    console.log(searchService);
  }

  function handlePagination(action: "next" | "previous") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < totalOfPage) {
        return prevPage + 1;
      }

      if (action === "previous" && prevPage > 1) {
        return prevPage - 1;
      }

      return prevPage;
    });
  }

  const invoice = SERVICE_EXAMPLE.reduce(
    (acc, service) => acc + service.amount,
    0,
  );

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
            value: formatCurrency(invoice),
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
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-primary text-2xl font-semibold mt-3 px-3">
                  Ordem de Serviço
                </h1>
                <span className="text-neutral text-sm px-3">
                  Operações que estão em andamento
                </span>
              </div>
              <form onSubmit={fetchServices} className="pt-4 px-4">
                <Input
                  value={searchService}
                  onChange={(e) => setSearchService(e.target.value)}
                  placeholder="Pesquise por serviços, frotas e motoristas..."
                  className="w-65 lg:w-96 h-10 text-primary text-xs bg-slate-100 border-gray-300 p-2 border rounded-lg outline-none focus:border focus:border-primary"
                />
              </form>
            </div>

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
                {services.map((item) => (
                  <Service
                    key={item.id}
                    className="grid grid-cols-6 gap-2 p-4 hover:bg-slate-300 border-b border-zinc-400 transition ease-linear hover:cursor-pointer"
                    data={item}
                    href={`/service/${item.id}`}
                  />
                ))}
              </div>

              <div className="flex justify-center items-center h-12 bg-slate-200">
                <Pagination
                  current={page}
                  total={totalOfPage}
                  onNext={() => handlePagination("next")}
                  onPrevious={() => handlePagination("previous")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
