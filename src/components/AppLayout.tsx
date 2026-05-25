import { Outlet } from "react-router";
import { Aside } from "./Aside";
import { Header } from "./Header";

export function AppLayout() {
  return (
    <div className="w-screen h-screen flex flex-col md:grid md:grid-cols-[230px_1fr] lg:grid-cols-[280px_1fr] md:grid-rows-[80px_1fr]">
      <div className="bg-slate-50 row-span-2 border-r border-gray-300">
        <Aside />
      </div>

      <div className="px-8 bg-slate-50 border-b border-gray-300">
        <Header />
      </div>

      <main className="flex justify-center items-center bg-slate-100 p-8 ">
        <Outlet />
      </main>
    </div>
  );
}
