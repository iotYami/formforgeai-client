import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { SidebarProvider } from "@/components/ui/sidebar"
import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <SidebarProvider >
        <App />
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>
)
