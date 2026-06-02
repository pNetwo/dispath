import { Loader } from "lucide-react";

export function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <span className="flex flex-col items-center gap-3 text-primary font-semibold text-sm">
        Carregando...
        <Loader className="animate-spin [animation-duration:2s]"/>
      </span>
    </div>
  );
}
