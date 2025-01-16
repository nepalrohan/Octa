import Image from "next/image"
import headphone from "@/public/headphone.jpg"
import {Button} from "@/components/ui/button"
import {IoIosCloseCircle} from "react-icons/io"
import {MdDelete} from "react-icons/md"
export function Cart({isopen, setisopen}:{isopen:boolean, setisopen:(x:boolean)=>boolean}) {
  
return  (
<div   className={`max-h-screen h-screen w-80 bg-customdark dark:shadow-lg dark:shadow-gray-100 z-50 right-0 top-0 absolute p-4  flex flex-col  gap-5 shadow-md  transform transition-transform duration-300 ${
    isopen ? 'translate-x-0' : ' hidden '
  }`}>

<div className=' top-0 left-0 sticky p-3 rounded-xl dark:text-customdark w-full flex items-center justify-between z-50 bg-gray-100 mb-1'>
<h1 className='text-lg font-bold '>Your Cart</h1>
<IoIosCloseCircle className='text-2xl font-bold cursor-pointer'  onClick={()=>setisopen(false)}/>
</div>

<div className='flex flex-col gap-2 overflow-y-auto  p-2 '>
    
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
</div>



<div className='right-0 sticky z-50 rounded-xl mt-1 bg-gray-100  bottom-0 flex items-start p-2 flex-col gap-2'>
<h1 className='font-bold text-sm dark:text-customdark'>Total Cart Amount: Rs.4509</h1>
<Button className='px-8 bg-customdark hover:bg-customdark rounded-xl text-gray-200 text-lg font-bold'>Checkout</Button>
</div>

</div>


)




}





export function CartCard (){


    return <div className='grid grid-cols-12 items-center gap-3 shadow-md p-2 bg-gray-200 rounded-xl '>
        <div className='col-span-4 flex items-center justify-center '>


<Image 
src={headphone}


height={60}
width={60}
alt="Product image"
/>

        </div>



        <div className='col-span-8 flex flex-col gap-1'>


            <h1 className='text-xs dark:text-customdark'>Red headphone ultra smooth with Ev045 feature</h1>
            <div className='flex items-center justify-between'>
            <p className='font-bold text-normal dark:text-customdark'>Rs.575</p>
            <MdDelete className='text-red-600 cursor-pointer text-xl font-semibold' />
                <Button className='bg-customdark text-gray-200 rounded-full px-3 hover:bg-customdark font-medium'>Buy now</Button>
            </div>
          
</div>



    </div>
}