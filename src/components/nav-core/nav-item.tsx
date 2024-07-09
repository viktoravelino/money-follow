import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  href: string;
  icon: ReactElement;
  children: string;
  active?: boolean;
}

export function NavItem(props: NavItemProps) {
  const { href, icon, children, active = false } = props;

  return (
    <Button
      variant="link"
      size="sm"
      className={cn(
        "text-muted-foreground hover:text-foreground w-full justify-start focus:no-underline",
        {
          "bg-accent text-accent-foreground": active,
        }
      )}
      asChild
    >
      <Link to={href} className="flex items-center gap-2">
        {icon}

        <span>{children}</span>
      </Link>
    </Button>
  );
}
