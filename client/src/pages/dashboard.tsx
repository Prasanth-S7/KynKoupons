import { AppSidebar } from "@/components/custom/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { DashboardComponent } from "@/components/custom/dashboard"

//@ts-ignore
export default function Dashboard({ MainComponent }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex bg-[#101010] h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center ga p-2 px-4 w-full bg-[#101010]">
            <SidebarTrigger className="-ml-1 text-white" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <h1 className="text-2xl font-bold text-white/70">Hi! KYN Admin</h1>
          </div>
        </header>
        <MainComponent></MainComponent>
      </SidebarInset>
    </SidebarProvider>
  )
}


