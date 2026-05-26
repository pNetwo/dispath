export type ServiceProps = {
  id: string;
  status: string;
  destiny: string;
  tow: string;
  driver: string;
  amount: string;
};

type Props = React.ComponentProps<"a"> & {
  data: ServiceProps;
};

export function Service({ data, ...rest }: Props) {
  return (
    <a {...rest}>
      <span className="text-xs font-semibold ">{data.id}</span>
      <span className="text-xs border bg-green-400 rounded-full w-fit px-2">
        {data.status}
      </span>
      <span className="text-xs font-semibold">{data.destiny}</span>
      <span className="text-xs font-semibold">{data.tow}</span>
      <span className="text-xs font-semibold">{data.driver}</span>
      <span className="text-xs font-semibold">
        <small className="font-semibold text-neutral">R$ </small>
        {data.amount}
      </span>
    </a>
  );
}
