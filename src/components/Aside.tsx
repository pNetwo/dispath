import { Button } from "./Button";

import { Plus } from "lucide-react";
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
        <Button className="w-full mt-10 bg-secondary text-primary flex justify-center items-center text-md p-2  transition ease-linear hover:border-2 hover:border-primary">
          <Plus size={18} />
          Nova OS
        </Button>
        <nav className="mt-4 flex flex-col gap-1 text-neutral">
          {navLinks.slice(0, 4).map(({ href, label, icon: Icon }) => (
            <a
              href={href}
              className="pl-4 py-3 flex items-center gap-2 hover:text-primary hover:border-r-3 hover:border-secondary rounded-lg hover:bg-slate-200 list-none"
            >
              <Icon size={18} />
              {label}
              <li key={href}></li>
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-gray-300 py-4 px-2 text-neutral">
        <nav className="mt-6 flex flex-col gap-1 text-neutral">
          {navLinks.slice(-2).map(({ href, label, icon: Icon }) => (
            <a
              href={href}
              className="pl-4 py-3 flex items-center gap-2 hover:text-primary hover:border-r-3 hover:border-secondary rounded-lg hover:bg-slate-200 list-none"
            >
              <Icon size={18} />
              {label}
              <li key={href}></li>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
