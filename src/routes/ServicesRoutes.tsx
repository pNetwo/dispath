import { Route, Routes } from "react-router";

import { AppLayout } from "../components/AppLayout";
import { NotFound } from "../pages/NotFound";
import { ServiceOrders } from "../pages/ServiceOrders";

export function ServicesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<ServiceOrders />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
