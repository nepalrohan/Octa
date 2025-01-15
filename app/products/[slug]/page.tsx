import Image from "next/image"
import {Button} from "@/components/ui/button"
import image from "@/public/neckband.jpg"
import ProductCard from "@/components/ProductCard"

const page = ()=>{


    return (

        <div className='grid grid-cols-12 p-10  '>
<div className='col-span-2  flex flex-col gap-2 bg-gray-200 dark:bg-gray-200'>
<div className='flex items-center justify-center mt-1'>
<Image 

src={image}
width={200}
height={200}
alt="Product image"
/>
</div>
<div className='flex flex-col gap-1 text-sm font-light dark:text-customdark ml-2'>


<h1>Rating: 4star</h1>
<h1>42 sold</h1>
<h1>Delivery time:1/2 days</h1>
<h1>Return valid:7days</h1>
<h1>Color: Red, Green, Blue</h1>

</div>


</div>
<div className='col-span-4 p-4 bg-gray-200  flex flex-col gap-2'>
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

    <div className='flex items-center justify-between'>

        <Button  className='rounded-full px-9 py-3 shadow-md  outline border-customdark  text-customdark ' >Add to cart </Button>
        <Button className='rounded-full bg-customdark text-gray-200 shadow-md px-9 py-3 hover:bg-customdark '>Buy now </Button>
        </div>
</div>
<div className='col-span-6 '>
<div className='h-[70vh]  p-2 grid grid-cols-3 gap-3 overflow-y-auto'>

{Array.from({length:8}).map((_, index:number)=>(

    <ProductCard   key={index} />
))}


</div>
    </div>
        </div>
    )
}

export default page;