import {
  ArrowUp,
  TriangleAlert,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { LayoutHeader } from "../components/LayoutHeader";

import { TOWTRUCKS } from "../utils/towTrucks.ts";

const statusConfig: Record<
  TOWTRUCKS["status"],
  { color: string; icon: LucideIcon }
> = {
  Disponível: { color: "bg-green-100 text-green-700", icon: Truck },
  Manutenção: { color: "bg-red-100 text-red-700", icon: Wrench },
};

export function Fleets() {
  return (
    <div className="w-full lg:max-w-5xl h-full flex flex-col">
      <LayoutHeader
        title="Visão Geral da Frota"
        subtitle="Gerencie sua frota ativa, suas atribuições e seus cronogramas de manutenção."
        cards={[
          {
            title: "Frota",
            value: "20",
            iconValue: Truck,
            iconDescription: ArrowUp,
            description: "+2 do último mês",
            descriptionColor: "text-cyan-700",
          },
          {
            title: "Disponíveis",
            value: "13",
            iconValue: Truck,
            iconDescription: Truck,
            description: "Disponiveis para viagem",
            descriptionColor: "text-secondary",
          },
          {
            title: "Manutenção",
            value: "3",
            iconValue: Truck,
            iconDescription: TriangleAlert,
            description: "Última atualização 5min atrás ",
            descriptionColor: "text-red-700",
          },
        ]}
      />

      <div>
        <div className="mt-12 border border-zinc-400 rounded-lg bg-slate-50">
          <div>
            <h1 className="text-primary text-2xl font-semibold mt-3 px-3">
              Controle da Frota
            </h1>
            <span className="text-neutral text-sm px-3">
              Operações que estão em andamento
            </span>

            <div className="mt-4">
              <div className="grid grid-cols-3 border-t border-b border-zinc-400 gap-2 px-3 py-2 bg-slate-200">
                <span className="text-zinc-700 text-xxs ">Guincho</span>
                <span className="text-zinc-700 text-xxs ">Placa</span>
                <span className="text-zinc-700 text-xxs ">Status</span>
              </div>

              <div className="flex flex-col gap-2 max-h-76.5 bg-white overflow-y-scroll overflow-hidden">
                {TOWTRUCKS.map((tow: TOWTRUCKS) => {
                  const StatusIcon = statusConfig[tow.status].icon; // ← move para dentro do map

                  return (
                    <div
                      key={tow.id}
                      className="grid grid-cols-3 px-3 py-2 hover:bg-slate-300 hover:cursor-pointer transition ease-linear"
                    >
                      <div className="flex flex-col">
                        <span className="text-lg text-primary">
                          {tow.model}
                        </span>
                        <span className="text-xs text-neutral uppercase">
                          {tow.type}
                        </span>
                      </div>
                      <div>
                        <span className="bg-zinc-100 border border-zinc-400 px-2 flex items-center w-fit">
                          {tow.plate}
                        </span>
                      </div>
                      <div>
                        <span
                          className={`flex items-center gap-1 text-xs rounded-full px-2 py-0.5 w-fit ${statusConfig[tow.status].color}`}
                        >
                          <StatusIcon size={14} />
                          {tow.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
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
