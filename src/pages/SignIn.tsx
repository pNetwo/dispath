import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading] = useState(false);

  function onSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    console.log(email, password);
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="dispatcher@company.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="••••••••"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Entrar
        <ArrowRight size={18} />
      </Button>

      <div className="flex justify-center items-center">
        <a
          href="/signup"
          className="text-sm font-semibold text-neutral hover:text-primary transition ease-linear"
        >
          Criar Conta
        </a>
      </div>
    </form>
  );
}
