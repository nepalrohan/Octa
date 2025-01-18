import Filter from "@/components/Filter"
import ProductCard from "@/components/ProductCard"
const page =()=>{


    return (
        <section className='mt-16 flex  flex-grow  overflow-hidden'>
        <div className='grid grid-cols-12 h-full overflow-hidden' >
<div className=' col-span-1 md:col-span-2  h-full  overflow-hidden'>

    <Filter/>
    </div>



    <div className=' col-span-11 md:col-span-10 overflow-y-auto max-h-full w-full'>
<div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-3 p-4 '>
{Array.from({length:40}).map((_, index:number)=>(

<ProductCard  key={index}/>

))}
    </div>
    <h1 className='text-xs tont-extralight mt-4  mb-2 text-gray-400 text-center opacity-60'>You have reached the end.</h1>

        </div>
            </div>

            </section>
    )
}


export default page;


