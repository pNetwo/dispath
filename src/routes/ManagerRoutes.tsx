import { Route, Routes } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { AllServices } from "../pages/AllServices";
import { Dashboard } from "../pages/Dashboard";
import { Fleets } from "../pages/Fleets";
import { NotFound } from "../pages/NotFound";
import { Drivers } from "../pages/Drivers";

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/fleets" element={<Fleets />} />
        <Route path="/drivers" element={<Drivers />} />

      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
