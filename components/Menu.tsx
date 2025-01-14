"use client"
import { HomeIcon, ShoppingBagIcon, } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'


const Menu = () => {
  const pathname=usePathname();
  return (
<div className='flex items-center gap-8 '>
    <Link className={`flex items-center gap-1 text-sm font-semibold`} href='/'><HomeIcon/><span className={`${pathname ==="/" && "border-b border-customdark dark:border-white"}`}>Home</span></Link>
    <Link className={` flex items-center gap-1 text-sm font-semibold`}  href='/products'><ShoppingBagIcon/><span className={`${pathname ==="/products" && "border-b border-customdark dark:border-white"}`}>Products</span></Link>

</div>
  )
}

export default Menu

