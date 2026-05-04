import { useState } from "react";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { DRIVERS } from "../utils/drivers";
import { INSURERS } from "../utils/insurers";
import { TOWTRUCKS } from "../utils/towTrucks";

export function ServiceOrders() {
  const [driver, setDriver] = useState("");
  const [insurer, setInsurer] = useState("");
  const [tow, setTow] = useState("");
  const [destiny, setDesteny] = useState("");

  return (
    <form className="w-full max-w-5xl bg-slate-50 rounded-xl flex justify-center flex-col p-10 gap-6">
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
        >
          {TOWTRUCKS.map((tow) => (
            <option>
              {tow.plate} | {tow.model}
            </option>
          ))}
        </Select>

        <Input
          legend="Destino"
          placeholder="Destino do serviço"
          onChange={(e) => setDesteny(e.target.value)}
        />
      </div>
    </form>
  );
}
