import { Bell, CircleQuestionMark, LogOut } from "lucide-react";

import { useEffect, useState } from "react";

export function Header() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="mt-6 flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-xs text-neutral uppercase tracking-wide">
          {dateTime.toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "2-digit",
            month: "long",
          })}
        </span>
        <span className="text-lg font-bold text-primary tabular-nums">
          {dateTime.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </span>
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
