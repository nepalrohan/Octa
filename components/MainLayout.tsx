"use client"
import  TabBar from "@/components/TabBar"
import React from 'react'
import Navbar from './Navbar'
import { usePathname } from 'next/navigation'

const blacklist =[
  "/dashboard"
]

const MainLayout = ({children}:{children:React.ReactNode}) => {
  const pathname = usePathname();

  const result = blacklist.includes(pathname);
  console.log(result);

  return (
    <div className='flex flex-col h-screen relative'>
      {
        result ?  null :
       <Navbar/>
      }
 


        {children}
       <TabBar/>

    </div>
  )
}



export default MainLayout