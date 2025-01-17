"use client"
import React from 'react';
import ProductCard from "./ProductCard";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"






const MostPopular = ()=>{
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  )
    return (
      <div className='mt-8 mb-8 md:px-8 '>
        <div className='  flex flex-col mx-auto items-center mb-8'>
     
<div className='relative w-fit'>
<div className='absolute  inset-0 bg-gradient-to-r  from-blue-500 to-purple-600 blur-2xl opacity-35 -z-10'>

</div>
<h1 className='font-extrabold text-3xl text-slate-800   dark:text-gray-200'>Most Popular Products</h1>

</div>
  <p className='text-gray-500 dark:text-gray-300'>Top Picks Loved by Everyone!</p>
</div>
        <div className=' md:p-12'>

        <Carousel
         plugins={[plugin.current]}
         onMouseEnter={plugin.current.stop}
         onMouseLeave={plugin.current.reset}
    
      className="w-full max-w-7xl relative px-2 "
    >




<CarouselContent className="-ml-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6">


          <div className="p-1 ">
          <ProductCard/>
              
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

       {/* Previous Button */}
  
         {/* Previous Button */}
         <div className=" hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 ">
    <CarouselPrevious />
  </div>

  {/* Next Button */}
  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 ">
    <CarouselNext />
  </div>

</Carousel>

     
  


            </div>
            </div>
    )
}



export default MostPopular;