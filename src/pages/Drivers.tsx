import { Truck, User } from "lucide-react";
import { LayoutHeader } from "../components/LayoutHeader";

import { useState } from "react";
import { Input } from "../components/Input.tsx";
import { Pagination } from "../components/Pagination.tsx";
import { DRIVERS } from "../utils/drivers.ts";

export function Drivers() {
  const [searchService, setSearchService] = useState("");

  const [page, setPage] = useState(1);
  const [totalOfPage, setTotalOfPage] = useState(10);

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

  return (
    <div className="w-full lg:max-w-5xl h-full flex flex-col">
      <LayoutHeader
        title="Visão Geral dos Motoristas"
        subtitle="Gerencie sua equipe de motoristas."
        cards={[
          {
            title: "Motoristas",
            value: "15",
            iconValue: Truck,
            iconDescription: User,
            description: "Disponíveis",
            descriptionColor: "text-cyan-700",
          },
          {
            title: "Folga",
            value: "2",
            iconValue: Truck,
            iconDescription: User,
            description: "Folgando",
            descriptionColor: "text-secondary",
          },
        ]}
      />

      <div>
        <div className="mt-12 border border-zinc-400 rounded-lg bg-slate-50">
          <div>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-primary text-2xl font-semibold mt-3 px-3">
                  Controle de Motoristas
                </h1>
                <span className="text-neutral text-sm px-3">
                  Lista de mototistas
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
              <div className="grid grid-cols-4 border-t border-b border-zinc-400 gap-2 px-3 py-2 bg-slate-200">
                <span className="text-zinc-700 text-xxs ">Nome</span>
                <span className="text-zinc-700 text-xxs ">Telefone</span>
                <span className="text-zinc-700 text-xxs ">Categoria</span>
                <span className="text-zinc-700 text-xxs ">Status</span>
              </div>

              <div className="flex flex-col gap-2 max-h-76.5 bg-white overflow-y-scroll overflow-hidden">
                {DRIVERS.map((driver) => (
                  <>
                    <div className="grid grid-cols-4 px-3 py-2 hover:bg-slate-300 hover:cursor-pointer transition ease-linear">
                      <div>
                        <span className="text-lg text-shadow-primary">
                          {driver.name}
                        </span>
                      </div>

                      <div>
                        <span className="text-sm font-semibold bg-slate-100 border p-1 border-slate-400">
                          {driver.phone}
                        </span>
                      </div>

                      <div>
                        <span className="text-primary">{driver.license}</span>
                      </div>

                      <div>
                        <span className="text-primary">{driver.status}</span>
                      </div>
                    </div>
                  </>
                ))}
              </div>

              <div className="flex justify-center items-center h-12 bg-slate-200 overflow-hidden rounded-b-lg">
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
    </div>
  );
}
