import Image from "next/image"
import {Button} from "@/components/ui/button"
import image from "@/public/neckband.jpg"
import { Separator } from "@/components/ui/separator"
import ProductCard from "@/components/ProductCard"

const page = ()=>{


    return (


<div className =' flex flex-col w-full mt-6 md:mt-8 '>

    <div className='flex md:flex-row flex-col w-full md:w-2/3 mx-auto p-3 md:p-0 items-center justify-center mb-8'>
<div className='flex  w-full md:w-[350px] justify-center items-center p-2 md:p-0  md:flex-col gap-2  bg-gray-200 h-full'>

<div className='flex items-center justify-center mt-1'>
<Image 

src={image}
width={200}
height={200}
alt="Product image"
/>

</div>
<div className='flex flex-col items-start justify-center gap-1 text-sm font-light dark:text-customdark ml-2'>

<div className='flex md:flex-row flex-col items-start md:items-center md:justify-between gap-1  md:gap-5 '>

<h1 className='font-bold'>Rating: 4star</h1>
<h1 className='font-bold'>42 sold</h1>

</div>
<h1 className='font-medium'>Delivery time:1/2 days</h1>
<h1 className='font-medium'>Return valid:7days</h1>
<h1 className='font-medium'>Color: Red, Green, Blue</h1>
</div>

</div>

<div className=' p-4 bg-gray-300 w-full  md:w-[400px] flex flex-col gap-2'>
<div className='flex flex-col gap-1'>
    <h1 className='text-lg font-bold dark:text-customdark'>Red Headphone V5 EGIT model 2024 with smooth padding</h1>
    <p className='text-sm font-extralight dark:text-customdark'>
    The Red Headphone V5 EGIT model (2024) features a sleek, modern design with a vibrant red finish. Its lightweight construction ensures comfort during extended listening sessions, while the smooth, plush padding on the ear cups and headband enhances the overall experience by providing a soft, cushioned feel.</p>
    <ul className='flex flex-col gap-1 text-sm font-light dark:text-customdark'>
<li>✔ Smmoth charging</li>
<li>✔ & hours plus battery life</li>
<li>✔ Guarentee form</li>
<li>✔ Xtended warentee</li>
<li>✔ Two wire available</li>
        </ul>
    
    
    <h3 className='text-lg font-extrabold dark:text-customdark'>Rs.570</h3>
    <h3 className='text-sm font-semibold  dark:text-customdark'>Waranty: 7 months</h3>
    </div>

    <div className='flex items-center gap-5 md:gap-0 justify-between'>

        <Button  className='rounded-full px-9 py-3 shadow-md  outline border-customdark  text-customdark ' >Add to cart </Button>
        <Button className='rounded-full bg-customdark text-gray-200 shadow-md px-9 py-3 hover:bg-customdark '>Buy now </Button>
        </div>

</div>

    </div>

<Separator className='bg-customdark'/>

{/* recommended products */}
        <div className='mt-8 flex flex-col gap-5 '>

        <div className='relative  mb-4 '>
<div className='absolute  inset-0 bg-gradient-to-r  from-blue-500 to-purple-600 blur-2xl opacity-35 -z-10'>

</div>
<h1 className='font-extrabold text-2xl text-slate-800 text-center mx-auto  dark:text-gray-200'>Similar products for you</h1>

</div>
<div className='h-full  p-6 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5  xl:grid-cols-6 gap-8'>

{Array.from({length:15}).map((_, index:number)=>(

    <ProductCard   key={index} />
))}




</div>
<h1 className='text-xs tont-extralight mt-4  mb-2 text-gray-400 text-center opacity-60'>You have reached the end.</h1>
    </div>
        


</div>



        
    )
}

export default page;