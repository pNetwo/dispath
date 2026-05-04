import { Bell, CircleQuestionMark, LogOut } from "lucide-react";
import { Input } from "./Input";

export function Header() {
  return (
    <header className="mt-6 flex justify-between items-center">
      <div>
        <Input
          placeholder="Pesquise por serviços, frotas e motoristas..."
          className="w-65 lg:w-96 h-10 text-primary text-xs bg-slate-100 border-gray-300 p-2 border rounded-lg outline-none focus:border focus:border-primary"
        />
      </div>
      <div className="flex justify-center items-center gap-4">
        <Bell className="text-neutral cursor-pointer hover:text-primary transition ease-linear" />
        <CircleQuestionMark className="text-neutral cursor-pointer hover:text-primary transition ease-linear" />
        <div className="flex justify-center items-center gap-2">
          <span className="text-neutral text-sm font-semibold">Olá, Neto</span>
          <LogOut className="text-neutral cursor-pointer hover:text-primary transition ease-linear" />
        </div>
      </div>
    </header>
  );
}
