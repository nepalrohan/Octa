import React from 'react'
import HeroSection from './HeroSection';

const HomePage = () => {
  return (
    <div className='relative grid  items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20'>
<HeroSection/>
<div className="absolute -z-50 inset-0 h-full w-full 
bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
bg-[size:20px_20px] 
[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
    </div>
  )
}




export default HomePage;