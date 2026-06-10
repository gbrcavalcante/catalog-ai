import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppBreadcrumb } from "@/components/app-breadcrumb";
import { ModeToggle } from "@/components/mode-toggle";

export function SiteHeader() {
  return (
    <header className="flex h-16 border-b shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 px-4 md:px-6">
      <div className="flex items-center gap-2 ">
        <SidebarTrigger className="-ml-1" />
        <div>
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
        </div>
        <AppBreadcrumb />
      </div>
      <div className="ml-auto -mr-1">
        <ModeToggle />
      </div>
    </header>
  );
}
