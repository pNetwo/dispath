type Props = React.ComponentProps<"select"> & {
  legend?: string;
};

export function Select({ legend, children, ...rest }: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20">
      {legend && (
        <legend className="uppercase text-sm mb-2 text-primary font-semibold">
          {legend}
        </legend>
      )}

      <select
        className="w-full h-12 border border-zinc-300 rounded-lg px-4 text-sm font-semibold text-primary bg-transparent outline-none focus:border focus:border-primary cursor-pointer"
        {...rest}
      >
        <option value="" disabled hidden>
          Selecione
        </option>
        {children}
      </select>
    </fieldset>
  );
}
