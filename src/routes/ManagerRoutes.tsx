import { Route, Routes } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { AllServices } from "../pages/AllServices";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/services" element={<AllServices />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
