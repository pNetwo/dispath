import { BrowserRouter } from "react-router";

import { Loading } from "../components/Loading";

import { AuthRoutes } from "./AuthRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { ServicesRoutes } from "./ServicesRoutes";

const isLoading = false;


const session = {
  user: {
    role: "services",
  },
};

function Route() {
  switch (session?.user.role) {
    case "services":
      return <ServicesRoutes />;

    case "manager":
      return <ManagerRoutes />;

    default:
      return <AuthRoutes />;
  }
}

export function Routes() {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
