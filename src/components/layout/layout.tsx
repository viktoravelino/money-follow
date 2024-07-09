import { PanelLeft } from "lucide-react";
import { Sidebar } from "../sidebar";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { NavCore } from "../nav-core";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <header>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="flex flex-col">
            <SheetHeader className="text-left">
              <SheetTitle>Money Follow</SheetTitle>
              <SheetDescription className="sr-only">
                Track your finances
              </SheetDescription>
            </SheetHeader>

            <NavCore />
          </SheetContent>
        </Sheet>
      </header>

      <Sidebar />

      <div className="sm:pl-40">
        <Outlet />
      </div>
    </div>
  );
}
