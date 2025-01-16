import Filter from "@/components/Filter"
import ProductCard from "@/components/ProductCard"
const page =()=>{


    return (
        <section className='flex flex-grow  overflow-hidden'>
        <div className='grid grid-cols-12 h-full overflow-hidden' >
<div className='col-span-2  h-full overflow-hidden'>

    <Filter/>
    </div>


    <div className='col-span-10 overflow-y-auto max-h-screen w-full'>
<div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-3 p-4 '>
{Array.from({length:40}).map((_, index:number)=>(

<ProductCard  key={index}/>

))}
    </div>
        </div>
            </div>
            </section>
    )
}


export default page;


