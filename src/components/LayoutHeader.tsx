import {
  Banknote,
  FileExclamationPoint,
  RefreshCcw,
  TrendingUp,
  TriangleAlert,
  Truck,
} from "lucide-react";



export function LayoutHeader() {
  return (
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
              Serviços
            </h3>
            <span className="text-primary font-bold text-2xl flex justify-between items-center">
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
              Manutenção
            </h3>
            <span className="text-primary font-bold text-2xl flex justify-between items-center">
              2
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
            <span className="text-primary font-bold text-2xl flex justify-between items-center">
              R$ 117.800,50
              <Banknote size={32} className="text-zinc-300" />
            </span>
            <p className="text-xxs text-neutral flex items-center gap-1">
              <RefreshCcw size={16} />
              Atualizado a 5m
            </p>
          </div>
        </div>
      </div>
  )
}