import {SideBar} from "@/components/SideBar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
export default function page({ children }: { children: React.ReactNode }){


    return (
<SidebarProvider>


<div className='grid-cols-12'>
<div className='col-span-4'>

<SideBar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
</div>

<div className='col-span-8'>

</div>


        </div>
     
    </SidebarProvider>
        
    )
}



