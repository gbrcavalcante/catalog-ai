import { Outlet } from "react-router";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
import { getSidebarDefaultOpen } from "@/utils/get-sidebar-default-open";

export function Layout() {
  const isOpen = getSidebarDefaultOpen();
  
  return (
    <SidebarProvider defaultOpen={isOpen}>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col container mx-auto gap-4 p-4 md:p-6">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
