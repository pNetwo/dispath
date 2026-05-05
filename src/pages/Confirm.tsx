import { CircleCheckBig } from "lucide-react";
import { Navigate, useLocation } from "react-router";
import { Button } from "../components/Button";

export function Confirm() {
  const location = useLocation();
  const data = location.state;

  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-slate-50 w-full max-w-3xl rounded-lg p-8">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl text-primary font-bold">
          Ordem de Serviço criada!
        </h1>
        <CircleCheckBig size={128} className="text-green-700" />
        <div className="w-full flex flex-col gap-4 mt-8">
          <div className="flex justify-between border-b border-gray-200 pb-1">
            <span className="text-sm font-semibold text-neutral">ID</span>
            <span className="text-sm font-semibold text-primary">
              {data.id}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-1">
            <span className="text-sm font-semibold text-neutral">
              Motorista
            </span>
            <span className="text-sm font-semibold text-primary">
              {data.driver}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-1">
            <span className="text-sm font-semibold text-neutral">Guincho</span>
            <span className="text-sm font-semibold text-primary">
              {data.tow}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-1">
            <span className="text-sm font-semibold text-neutral">Seguro</span>
            <span className="text-sm font-semibold text-primary">
              {data.insurer}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-1">
            <span className="text-sm font-semibold text-neutral">Destino</span>
            <span className="text-sm font-semibold text-primary">
              {data.destiny}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-1">
            <span className="text-sm font-semibold text-neutral">Km Total</span>
            <span className="text-sm font-semibold text-primary">
              {data.km}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-1">
            <span className="text-sm font-semibold text-neutral">
              Valor Total
            </span>
            <span className="text-sm font-semibold text-primary">
              {data.amount}
            </span>
          </div>
        </div>

        <Button className="w-full">Nova solicitação</Button>
      </div>
    </div>
  );
}
