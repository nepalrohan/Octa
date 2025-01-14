import Filter from "@/components/Filter"
import ProductCard from "@/components/ProductCard"
const page =()=>{


    return (
        <div className='grid grid-cols-12' >
<div className='col-span-2'>

    <Filter/>
    </div>


    <div className='col-span-10'>
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-3 p-4 '>
{Array.from({length:40}).map((_, index:number)=>(

<ProductCard  key={index}/>

))}
    </div>
        </div>
            </div>
    )
}


export default page;


