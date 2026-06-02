import { File } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { DRIVERS } from "../utils/drivers";
import { INSURERS } from "../utils/insurers";
import { TOWTRUCKS } from "../utils/towTrucks";

export function ServiceOrders() {
  const [driver, setDriver] = useState("");
  const [insurer, setInsurer] = useState("");
  const [tow, setTow] = useState("");
  const [destiny, setDesteny] = useState("");
  const [km, setKm] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filename, setFilename] = useState<File | null>(null);

  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  function onSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    if (params.id) {
      return navigate(-1);
    }

    navigate("/confirm", {
      state: {
        fromSubmit: true,
        id: crypto.randomUUID(),
        driver,
        insurer,
        tow,
        destiny,
        km,
        amount,
        filename,
      },
    });
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-5xl bg-slate-50 rounded-xl flex justify-center flex-col p-10 gap-6"
    >
      <header>
        <h1 className="text-3xl text-primary font-bold">Ordens de Serviço</h1>
        <p className="text-sm text-neutral">Cadastro de serviços realizados.</p>
      </header>

      <div className="flex gap-4">
        <Select
          required
          legend="Motorista"
          value={driver}
          onChange={(e) => setDriver(e.target.value)}
          disabled={!!params.id}
        >
          {DRIVERS.map((driver) => (
            <option>{driver.name}</option>
          ))}
        </Select>
        <Select
          required
          legend="Seguradora"
          value={insurer}
          onChange={(e) => setInsurer(e.target.value)}
          disabled={!!params.id}
        >
          {INSURERS.map((insurer) => (
            <option>{insurer.name}</option>
          ))}
        </Select>
      </div>

      <div className="flex gap-4">
        <Select
          required
          legend="Guincho"
          value={tow}
          onChange={(e) => setTow(e.target.value)}
          disabled={!!params.id}
        >
          {TOWTRUCKS.map((tow) => (
            <option>
              {tow.plate} | {tow.model}
            </option>
          ))}
        </Select>

        <Input
          required
          legend="Destino"
          placeholder="Destino do serviço"
          value={destiny}
          onChange={(e) => setDesteny(e.target.value)}
          disabled={!!params.id}
        />
      </div>

      <div className="flex gap-4">
        <Input
          required
          type="number"
          legend="KM total"
          placeholder=""
          onChange={(e) => setKm(e.target.value)}
          disabled={!!params.id}
          className="w-full p-2 border border-gray-300 rounded-lg text-sm font-semibold focus:border-primary outline-none"
        />

        <Input
          required
          legend="Valor total"
          placeholder="R$"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={!!params.id}
        />
      </div>

      {params.id ? (
        <div className="flex justify-center items-center">
          <a
            href=""
            target="_blank"
            className="text-sm font-semibold flex justify-center items-center gap-2 text-primary hover:opacity-80 transition ease-linear"
          >
            <File className="text-primary" />
            Abrir comprovante
          </a>
        </div>
      ) : (
        <div>
          <Upload
            filename={filename && filename.name}
            onChange={(e) => e.target.files && setFilename(e.target.files[0])}
            disabled={!!params.id}
          />
        </div>
      )}

      <Button type="submit" isLoading={isLoading}>
        {params.id ? "Voltar" : "Enviar"}
      </Button>
    </form>
  );
}
