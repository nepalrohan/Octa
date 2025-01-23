import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SideBar } from "@/components/SideBar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SideBar />
      <main className="w-full">
        <SidebarTrigger  />
        {children}
      </main>
    </SidebarProvider>
  )
}


