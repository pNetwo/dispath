type Props = React.ComponentProps<"input"> & {
  legend?: string;
};

export function Input({ legend, type = "text", ...rest }: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20">
      {legend && (
        <legend className="uppercase text-sm mb-2 text-primary font-semibold">
          {legend}
        </legend>
      )}

      <input
        type={type}
        className="w-full h-12 border border-zinc-300 rounded-lg px-4 text-sm text-primary font-semibold bg-transparent outline-none focus:border focus:border-primary"
        {...rest}
      />
    </fieldset>
  );
}
