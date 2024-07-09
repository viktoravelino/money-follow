import { ThemeProvider } from "@/components/theme-provider";

import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <TooltipProvider> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {/* </TooltipProvider> */}
    </ThemeProvider>
  );
}

export default App;
