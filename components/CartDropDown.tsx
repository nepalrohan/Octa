"use client"
import {Cart} from "@/components/Cart"
import { Badge } from "@/components/ui/badge"
import {useState} from "react";
import React from 'react'
import { ShoppingCart } from 'lucide-react'
const CartDropDown = () => {

  const [isopen, setisopen] = useState(false);


  return (
    <>
  <div className='relative inline-block '>
<ShoppingCart className='h-9 cursor-pointer  text-slate-900 dark:text-gray-200' onClick={()=>(setisopen(true))} />
<Badge className='absolute top-0 font-semibold hover:bg-gray-500 right-0 translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white dark:text-slate-900 dark:bg-slate-200 px-2 py-1 text-xs rounded-full w-4 h-4 flex items-center justify-center'>5</Badge>
  

   </div> 
   <Cart isopen={isopen} setisopen={setisopen} />
   </>
  )
}




export default CartDropDown