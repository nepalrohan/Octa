"use client"
import React from 'react'

 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from './ui/button'




const UserDropDown = () => {

   
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
    <Avatar className='cursor-pointer bg-slate-900 dark:bg-gray-200 dark:text-slate-900 text-gray-200'>
  <AvatarImage src="" />
  <AvatarFallback className='font-bold '>CN</AvatarFallback>
</Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56 z-50 gap-2 flex flex-col  bg-customdark text-white rounded-xl">
     
      
      <Button
     className=' font-bold  rounded-xl cursor-pointer hover:bg-gray-300  hover:text-customdark '
      >
        Profile
      </Button>
    
      <Button
     className=' font-bold  rounded-xl cursor-pointer hover:bg-gray-400  hover:text-customdark '
      >
        Dashboard
      </Button>
      <Button
         className='font-bold rounded-xl cursor-pointer hover:bg-gray-400  hover:text-customdark ' 
      >
        Logout
      </Button>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default UserDropDown