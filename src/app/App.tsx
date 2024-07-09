import { BrowserRouter } from "react-router-dom";
import { Router } from "@/app/router";
import { ThemeProvider } from "@/app/providers/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
