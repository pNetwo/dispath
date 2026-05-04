import { Outlet, useLocation } from "react-router";
import tow from "../assets/tow.svg";

export function AuthLayout() {
  const location = useLocation();

  const subtitle =
    location.pathname === "/signup"
      ? "Crie a sua conta"
      : "Faça login na sua conta";

  return (
    <div className="w-screen h-screen bg-slate-100 flex flex-col justify-center items-center">
      <main className="w-80 bg-white p-8 border border-zinc-300 shadow-lg rounded-lg md:w-115.5">
        <div className="flex flex-col justify-center items-center gap-2 mb-8">
          <img
            src={tow}
            className="bg-primary p-2 w-20 h-20 rounded-lg"
            alt="icone de um caminhão"
          />
          <h1 className="text-primary uppercase font-bold text-3xl">Dispath</h1>
          <p className="text-neutral">{subtitle}</p>
        </div>
        <Outlet />
      </main>
    </div>
  );
}
