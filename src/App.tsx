import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";

import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
    </ThemeProvider>
  );
}

export default App;
