"use client"
import React from 'react'

 
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"




const UserDropDown = () => {

   
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
    <Avatar className='cursor-pointer bg-slate-900 dark:bg-gray-200 dark:text-slate-900 text-gray-200'>
  <AvatarImage src="" />
  <AvatarFallback className='font-bold '>CN</AvatarFallback>
</Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56 z-50 gap-4 bg-customdark text-white rounded-xl">
     
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem
     className=' font-bold  rounded-xl cursor-pointer hover:bg-gray-400 hover:shadow-md hover:text-customdark '
      >
        Profile
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        className='font-bold rounded-xl cursor-pointer hover:bg-gray-400 hover:shadow-md hover:text-customdark ' 
      >
        Dashboard
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
         className='font-bold rounded-xl cursor-pointer hover:bg-gray-400 hover:shadow-md hover:text-customdark ' 
      >
        Login
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default UserDropDown