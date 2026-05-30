import { formatCurrency } from "../utils/formatCurrency";

export type ServiceProps = {
  id: string;
  status: "Em andamento" | "Pendente" | "Concluído";
  destiny: string;
  tow: string;
  driver: string;
  amount: number;
};

type Props = React.ComponentProps<"a"> & {
  data: ServiceProps;
};

export function Service({ data, ...rest }: Props) {
  const statusConfig = {
    "Em andamento": "bg-blue-100 text-blue-700",
    Pendente: "bg-amber-100 text-amber-700",
    Concluído: "bg-green-100 text-green-700",
  };

  const status = data.status ?? "Em andamento";

  return (
    <a {...rest}>
      <span className="text-xs font-semibold ">{data.id}</span>
      <span
        className={`text-xs border rounded-full w-fit px-2 ${statusConfig[status]}`}
      >
        {status}
      </span>
      <span className="text-xs font-semibold">{data.destiny}</span>
      <span className="text-xs font-semibold">{data.tow}</span>
      <span className="text-xs font-semibold">{data.driver}</span>
      <span className="text-xs font-semibold">
        <small className="font-semibold text-neutral">R$ </small>
        {formatCurrency(data.amount).replace("R$", "")}
      </span>
    </a>
  );
}
