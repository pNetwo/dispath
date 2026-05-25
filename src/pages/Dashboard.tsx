import {
  Banknote,
  FileExclamationPoint,
  RefreshCcw,
  TrendingUp,
  TriangleAlert,
  Truck,
} from "lucide-react";

import { Service } from "../components/Service";

const SERVICE_EXAMPLE = {
  id: "OS-1234",
  status: "Em Rota",
  destiny: "Santos",
  tow: "AAA-1111",
  driver: "João",
};

export function Dashboard() {
  return (
    <div className="w-full lg:max-w-5xl h-full flex flex-col">
      <div className="flex flex-col">
        <div className="flex flex-col mb-8">
          <h1 className="text-3xl font-bold text-primary">Visão Geral</h1>
          <p className=" text-sm font-semibold text-neutral">
            Status de operaçoes do Dispath em tempo real
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="w-full p-4 border border-zinc-400 rounded-lg bg-white flex flex-col gap-3   ">
            <h3 className="uppercase text-sm font-semibold text-zinc-700">
              Realizados
            </h3>
            <span className="text-primary font-bold text-4xl flex justify-between items-center">
              14
              <Truck size={32} className="text-zinc-300" />
            </span>
            <p className="text-xxs text-cyan-700 flex items-center gap-1">
              <TrendingUp size={16} />
              +2 da última hora
            </p>
          </div>
          <div className="w-full p-4 border border-zinc-400 rounded-lg bg-white flex flex-col gap-3   ">
            <h3 className="uppercase text-sm font-semibold text-zinc-700">
              Pendentes
            </h3>
            <span className="text-primary font-bold text-4xl flex justify-between items-center">
              14
              <FileExclamationPoint size={32} className="text-zinc-300" />
            </span>
            <p className="text-xxs text-red-700 flex items-center gap-1">
              <TriangleAlert size={16} />
              +1 Urgência
            </p>
          </div>
          <div className="w-full p-4 border border-zinc-400 rounded-lg bg-white flex flex-col gap-3   ">
            <h3 className="uppercase text-sm font-semibold text-zinc-700">
              Faturamento
            </h3>
            <span className="text-primary font-bold text-4xl flex justify-between items-center">
              14
              <Banknote size={32} className="text-zinc-300" />
            </span>
            <p className="text-xxs text-neutral flex items-center gap-1">
              <RefreshCcw size={16} />
              Atualizado a 5m
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-12 border border-zinc-400 rounded-lg bg-slate-50">
          <div>
            <h1 className="text-primary text-2xl font-semibold mt-3 px-3">
              Ordem de Serviço
            </h1>
            <span className="text-neutral text-sm px-3">
              Operações ativas e pendentes
            </span>

            <div className="mt-4">
              <div className="grid grid-cols-5 border-t border-b border-zinc-400 gap-2 px-3 py-2">
                <span className="text-zinc-700 text-xxs ">OS</span>
                <span className="text-zinc-700 text-xxs ">STATUS</span>
                <span className="text-zinc-700 text-xxs ">DESTINO</span>
                <span className="text-zinc-700 text-xxs ">GUINCHO</span>
                <span className="text-zinc-700 text-xxs ">MOTORISTA</span>
              </div>

              <div>
                <Service
                  className="grid grid-cols-5 gap-2 px-3 py-2"
                  data={SERVICE_EXAMPLE}
                />
                <Service
                  className="grid grid-cols-5 gap-2 px-3 py-2"
                  data={SERVICE_EXAMPLE}
                />
                <Service
                  className="grid grid-cols-5 gap-2 px-3 py-2"
                  data={SERVICE_EXAMPLE}
                />
                <Service
                  className="grid grid-cols-5 gap-2 px-3 py-2"
                  data={SERVICE_EXAMPLE}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
