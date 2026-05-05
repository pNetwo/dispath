import { UploadIcon } from "lucide-react";

type Props = React.ComponentProps<"input"> & {
  filename?: string | null;
};

export function Upload({ filename = null, ...rest }: Props) {
  return (
    <div>
      <legend className="uppercase text-sm mb-2 text-primary font-semibold">Check-List</legend>
      <div className="w-full h-12 flex items-center rounded-lg border border-gray-300 text-sm text-primary outline-none bg-transparent">
        <input type="file" id="upload" {...rest} className="hidden"/>

        <span className="text-xs text-primary flex-1 pl-4">{filename ?? "Selecione o arquivo"}</span>

        <label htmlFor="upload" className="flex h-12 px-4 items-center bg-primary text-white rounded-lg cursor-pointer disabled:opacity-50 hover:opacity-85 transition ease-linear">
          <UploadIcon />
        </label>
      </div>
    </div>
  );
}
