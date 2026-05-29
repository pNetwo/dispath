import {
  ClipboardCheck,
  Headset,
  LayoutDashboard,
  Settings,
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
  // Nav Links
  {
    href: "/",
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

  // Support Links
  {
    href: "/support",
    label: "Suporte",
    icon: Headset,
  },

  {
    href: "/config",
    label: "Configuração",
    icon: Settings,
  },
];
