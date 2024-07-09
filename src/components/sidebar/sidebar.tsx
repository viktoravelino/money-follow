import { NavCore } from "../nav-core";

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-40  flex-col border-r bg-background sm:flex">
      <NavCore />
    </aside>
  );
}
