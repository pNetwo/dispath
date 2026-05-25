export type ServiceProps = {
  id: string;
  status: string;
  destiny: string;
  tow: string;
  driver: string;
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
      <span className="text-xs ">{data.destiny}</span>
      <span className="text-xs ">{data.tow}</span>
      <span className="text-xs ">{data.driver}</span>
    </a>
  );
}
