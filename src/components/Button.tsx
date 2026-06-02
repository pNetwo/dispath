import { cn } from "../utils/twMerge";

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
};

export function Button({
  children,
  isLoading,
  className,
  type = "button",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={cn(
        `mt-6 flex justify-center items-center gap-2 bg-primary h-12 rounded-lg text-white text-lg font-semibold cursor-pointer hover:opacity-90 transition ease-linear disabled:opacity-50 disabled:cursor-not-allowed`,
        className,
        isLoading && "disabled:cursor-not-allowed",
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
