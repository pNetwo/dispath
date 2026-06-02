import { Route, Routes } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { AllServices } from "../pages/AllServices";
import { Dashboard } from "../pages/Dashboard";
import { Drivers } from "../pages/Drivers";
import { Fleets } from "../pages/Fleets";
import { NotFound } from "../pages/NotFound";
import { ServiceOrders } from "../pages/ServiceOrders";

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/service/:id" element={<ServiceOrders />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/fleets" element={<Fleets />} />
        <Route path="/drivers" element={<Drivers />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
