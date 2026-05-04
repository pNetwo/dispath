import { Button } from "./Button";

import { Headset, Plus, Settings } from "lucide-react";
import tow from "../assets/tow.svg";
import { navLinks } from "../utils/navLinks";

export function Aside() {
  return (
    <aside className="flex flex-col justify-between h-full">
      <div className="flex-1 p-4">
        <div className="flex justify-center items-center gap-2">
          <div className="bg-primary w-12 p-2 rounded-lg">
            <img src={tow} alt="Imagem de caminhão" />
          </div>
          <div>
            <h1 className="text-2xl text-primary">Dispatch</h1>
            <p className="text-sm text-neutral">Centro de dispacho</p>
          </div>
        </div>
        <Button className="w-full bg-secondary text-primary flex justify-center items-center text-md p-2 hover:border-2 hover:border-primary transition ease-linear">
          <Plus size={18} />
          Nova OS
        </Button>
        <nav className="mt-6 flex flex-col gap-1 text-neutral">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <li
              key={href}
              className="pl-4 py-3 flex items-center gap-2 hover:text-primary hover:border-r-3 hover:border-secondary rounded-lg hover:bg-slate-200"
            >
              <Icon size={18} />
              <a href={href}>{label}</a>
            </li>
          ))}
        </nav>
      </div>

      <div className="border-t border-gray-300 py-4 px-2 text-neutral">
        <ul className="flex flex-col gap-4">
          <li className="px-4 py-3 flex items-center gap-2 hover:text-primary hover:border-r-3 hover:border-secondary rounded-lg hover:bg-slate-200">
            <a href="/" className="flex items-center gap-2">
              <Headset />
              Suporte
            </a>
          </li>
          <li className="px-4 py-3 flex items-center gap-2 hover:text-primary hover:border-r-3 hover:border-secondary rounded-lg hover:bg-slate-200">
            <a href="/" className="flex items-center gap-2">
              <Settings />
              Configurações
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
