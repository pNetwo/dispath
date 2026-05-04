import { BrowserRouter } from "react-router";
import { ServicesRoutes } from "./ServicesRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      <ServicesRoutes />
    </BrowserRouter>
  );
}
