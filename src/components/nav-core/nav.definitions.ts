import {
  ArrowLeftRight,
  CreditCard,
  HomeIcon,
  Settings,
  Tag,
} from "lucide-react";

export const routes = [
  {
    title: "Dashboard",
    name: "dashboard",
    slug: "/dashboard",
    icon: HomeIcon,
  },
  {
    title: "Transactions",
    name: "transactions",
    slug: "/transactions",
    icon: ArrowLeftRight,
  },
  {
    title: "Categories",
    name: "categories",
    slug: "/categories",
    icon: Tag,
  },
  {
    title: "Accounts",
    name: "accounts",
    slug: "/accounts",
    icon: CreditCard,
  },
  {
    title: "Settings",
    name: "settings",
    slug: "/settings",
    icon: Settings,
  },
];

export const handleActive = (href: string, currentPath: string) =>
  href === currentPath;
