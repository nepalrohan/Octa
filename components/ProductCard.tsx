"use client"
import React from 'react'
import {
  Card,
  CardContent,

  

} from "@/components/ui/card"

import Image from 'next/image';
import neckband from "@/public/headphone.jpg"
import { ArrowUpRight, StarIcon } from 'lucide-react';
import {useRouter} from "next/navigation"


const imageStyle = {
    borderRadius: '3%',
    
   
  }
const ProductCard = () => {

  const router = useRouter()
  return (
    <Card className="w-[200px] relative  dark:bg-white border-none outline-none shadow-sm shadow-slate-700   ">
   
    <CardContent className='flex flex-col  p-1 '>
   <div className='flex   items-center justify-center rounded-lg relative overflow-hidden'>
   <Image
      src={neckband}
  width={180}
  height={180}
      alt="Product name"
      style={imageStyle} 
    />
   </div>
    <div className="flex   rounded-bl-lg  rounded-br-lg  flex-col gap-1 items-start mt-1 py-1">
    <h1 className='font-semibold text-sm dark:text-gray-800 text-gray-600'>Wirelsess Neckband Epoce Beta V21 with smooth vt</h1>
     <h3 className='font-extrabold text- dark:text-customdark'>Rs.575</h3>
     <div className='flex justify-between items-center gap-8'>
<h3 className='flex items-center gap-1 dark:text-customdark text-sm'>4.4 <StarIcon className='text-sm'/> </h3>
<p className='text-xs text-gray-600 dark:text-gray-600'>42 sold</p>

     </div>

    </div>
    </CardContent>
    <ArrowUpRight className='ml-2 h-7 w-7 text-xl right-0 cursor-pointer text-customdark bg-white rounded-full shadow-lg z-10  hover:shadow-customdark top-0 absolute' onClick={()=>(router.push('/products/abc'))} />
  </Card>
  )
}

export default ProductCard