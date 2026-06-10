import { RouterProvider } from "react-router";
import { router } from "@/router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider storageKey="catalog-ai-theme">
        <TooltipProvider>
          <RouterProvider router={router} />
          <Toaster position="top-right" />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
