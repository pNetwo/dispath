import { BrowserRouter } from "react-router";
import { ManagerRoutes } from "./ManagerRoutes";
import { ServicesRoutes } from "./ServicesRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  );
}
