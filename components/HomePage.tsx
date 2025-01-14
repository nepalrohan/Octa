
import React from 'react'
import HeroSection from './HeroSection';
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react';
import Link from "next/link"
const HomePage = () => {

  return (
    <div className='relative grid  items-center justify-items-center h-fit p-8 gap-16 sm:p-20 mt-16'>
<HeroSection/>
<div className="absolute -z-50 inset-0 h-full w-full 
bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
bg-[size:20px_20px] 
[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
<div className='flex items-center  flex-col gap-2 justify-center mt-6'>
    <Link href="/products" className='rounded-full flex items-center bg-gradient-to-r from-customdark to-gray-600 hover:bg-gradient-to-r hover:from-customdark hover:to-gray-500 text-gray-200 dark:text-slate-900 dark:bg-gradient-to-r dark:from-purple-500 dark:to-gray-400 dark:hover:bg-gradient-to-r dark:hover:from-purple-400 :hover:to-gray-450 font-semibold  px-8 py-1 hover:shadow-lg '>View Products<ArrowUpRight className='ml-2 h-12 text-xl'  /></Link>
<p className='text-sm text-gray-500'>Shop Now & Save Big on Your Favorite Gadgets!</p>
</div>
    </div>
  )
}




export default HomePage;