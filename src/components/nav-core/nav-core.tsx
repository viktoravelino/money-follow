import { NavItem } from "./nav-item";
import { handleActive, routes } from "./nav.definitions";
import { useLocation } from "react-router-dom";

export function NavCore() {
  const router = useLocation();

  return (
    <nav className="flex flex-col gap-2 px-2 sm:py-4 h-full [&>:last-child]:mt-auto">
      {routes.map((route) => {
        const Icon = route.icon;

        return (
          <NavItem
            key={route.slug}
            href={route.slug}
            icon={<Icon className="size-5" />}
            active={handleActive(route.slug, router.pathname)}
          >
            {route.title}
          </NavItem>
        );
      })}
    </nav>
  );
}
