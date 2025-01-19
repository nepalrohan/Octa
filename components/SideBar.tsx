// import {Button} from "@/components/ui/button"

// export default function SideBar(){
// const admin = true;
// return ( 

// <div className='w-full relative items-center  min-h-screen p-2 flex flex-col gap-2  bg-gray-100'>


// <h1 className='text-customdark text-lg font-semibold mb-10 p-2 border-b-2 border-gray-600'>Rohan Nepal</h1>

// {
//   admin ? 
// (
//   <>
//   <Button className='w-full text-bold rounded-md font-lg hover:bg-customdark text-gray-100 bg-customdark px-10 py-3'>
// Orders
// </Button>

// <Button className='w-full text-bold rounded-md font-lg hover:bg-customdark text-gray-100 bg-customdark px-10 py-3'>
// Users
// </Button>

// <Button className='w-full text-bold rounded-md font-lg hover:bg-customdark text-gray-100 bg-customdark px-10 py-3'>
// Products
// </Button>

// <Button className='w-full text-bold rounded-md font-lg hover:bg-customdark text-gray-100 bg-customdark px-10 py-3'>
// Add Products
// </Button>
  
//   </>
// ):
// (<>
//   <Button className='w-full text-bold rounded-md font-lg hover:bg-customdark text-gray-100 bg-customdark px-10 py-3'>
// My Purchase
// </Button>

// <Button className='w-full text-bold rounded-md font-lg hover:bg-customdark text-gray-100 bg-customdark px-10 py-3'>
// My Cart
// </Button>

// <Button className='w-full text-bold rounded-md font-lg hover:bg-customdark text-gray-100 bg-customdark px-10 py-3'>
// Pending Order
// </Button>

// <Button className='w-full text-bold rounded-md font-lg hover:bg-customdark text-gray-100 bg-customdark px-10 py-3'>
// Cancelled Order
// </Button>
// </>)

// }




// <div className="absolute p-2 mb-2 bottom-0 w-full">
//     <Button className="w-full text-bold rounded-md font-lg hover:bg-customdark text-gray-100 bg-customdark px-10 py-3">
//       Logout
//     </Button>


//   </div>
//   </div>











// )





// }




import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const useritems = [

  {
    title: "My Purchase",
    url: "/dashboard/mypurchase",

  },
  {
    title: "My Cart",
    url: "/dashboard/mycart",
  },
  {
    title: "Pending Order",
    url: "/dashboard/pendingorder",
  },
  {
    title: "Cancelled Order",
    url: "/dashboard/cancelled",
  },
]


const adminitems =[
  {
    title: "Orders",
    url: "/dashboard/orders",
  },
  {
    title: "Users",
    url: "/dashboard/user",
  },
  {
    title: "Products",
    url: "/dashboard/products",
  },
  {
    title: "Add Products",
    url: "/dashboard/addproduct",
  },


]

export function SideBar() {


  const admin =true;
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Octa</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>




              {
              
              
              admin ? adminitems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )):
              
              useritems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))
              
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
