import { House } from "lucide-react";
import error from "../assets/404.png";

export function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center p-8 text-center">
      <div className="w-80 flex flex-col justify-center items-center gap-3 text-primary md:w-lg">
        <img
          src={error}
          className="w-48 rounded-lg"
          alt="imagem de um caminhão"
        />
        <h1 className="text-5xl">404</h1>
        <h2 className="text-2xl">Página não encontrada</h2>
        <p className="text-neutral">
          A rota de despacho ou registro que você procura não pode ser
          localizada em nossos sistemas.
        </p>
        <a
          href="/"
          className="w-64 mt-4 flex justify-center items-center gap-2 bg-primary text-white h-12 rounded-full cursor-pointer hover:opacity-90 transition ease-linear md:w-80"
        >
          <House />
          Voltar ao início
        </a>
      </div>
    </div>
  );
}
