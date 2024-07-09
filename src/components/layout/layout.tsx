import { Outlet } from "react-router-dom";
import { AvatarIcon } from "@radix-ui/react-icons";
import { PanelLeft } from "lucide-react";

import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavCore } from "@/components/nav-core";

export function Layout() {
  return (
    <div>
      <header className="sm:hidden flex items-center justify-between h-16">
        <div className="w-14 flex items-center justify-center">
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
        </div>

        <div className="flex-1 flex items-center justify-center">
          <span className="text-xl font-bold">Money Follow</span>
        </div>

        <div className="w-14 flex items-center justify-center">
          <AvatarIcon className="size-5" />
        </div>
      </header>

      <Sidebar />

      <main className="sm:pl-40">
        <div
          className="
            p-[--layout-gap]
            sm:p-[--layout-gap-sm]
            min-h-[calc(100vh-4rem)]
            sm:min-h-screen
          "
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}
