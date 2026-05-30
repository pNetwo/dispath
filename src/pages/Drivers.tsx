import { ArrowUp, Truck } from "lucide-react";
import { LayoutHeader } from "../components/LayoutHeader";

import { DRIVERS } from "../utils/drivers.ts";

export function Drivers() {
  return (
    <div className="w-full lg:max-w-5xl h-full flex flex-col">
      <LayoutHeader
        title="Visão Geral dos Motoristas"
        subtitle="Gerencie sua equipe de motoristas."
        cards={[
          {
            title: "Motoristas",
            value: "13",
            iconValue: Truck,
            iconDescription: ArrowUp,
            description: "+2 do último mês",
            descriptionColor: "text-cyan-700",
          },
        ]}
      />

      <div>
        <div className="mt-12 border border-zinc-400 rounded-lg bg-slate-50">
          <div>
            <h1 className="text-primary text-2xl font-semibold mt-3 px-3">
              Controle de Motoristas
            </h1>
            <span className="text-neutral text-sm px-3">
              Dados dos motoristas disponíveis
            </span>

            <div className="mt-4">
              <div className="grid grid-cols-3 border-t border-b border-zinc-400 gap-2 px-3 py-2 bg-slate-200">
                <span className="text-zinc-700 text-xxs ">Nome</span>
                <span className="text-zinc-700 text-xxs ">Telefone</span>
                <span className="text-zinc-700 text-xxs ">Categoria</span>
              </div>

              <div className="flex flex-col gap-2 max-h-76.5 bg-white overflow-y-scroll overflow-hidden">
                {DRIVERS.map((driver) => (
                  <>
                    <div className="grid grid-cols-3 px-3 py-2 hover:bg-slate-300 hover:cursor-pointer transition ease-linear">
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
                    </div>
                  </>
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
