import { BrowserRouter } from "react-router";
import { ServicesRoutes } from "./ServicesRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  );
}
