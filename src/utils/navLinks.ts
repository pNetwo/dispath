import {
  ClipboardCheck,
  LayoutDashboard,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const navLinks: NavLink[] = [
  {
    href: "/dashboard",
    label: "Painel",
    icon: LayoutDashboard,
  },
  {
    href: "/services",
    label: "Ordem de Serviço",
    icon: ClipboardCheck,
  },
  {
    href: "/fleet",
    label: "Frotas",
    icon: Truck,
  },
  {
    href: "/drivers",
    label: "Motoristas",
    icon: Users,
  },
];
