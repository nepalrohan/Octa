
// import {Button} from "@/components/ui/button"
import {BsEarbuds} from "react-icons/bs";
import {GiEarbuds} from "react-icons/gi"
import {BsHeadphones} from "react-icons/bs";
import {BsSpeakerFill} from "react-icons/bs"
import {FaSortAmountUp} from "react-icons/fa"
import {FaSortAmountDown} from "react-icons/fa"

const Filter = () =>{

    return (




        <div className=' flex w-full  h-[70vh] md:h-[88vh] overflow-hidden sticky left-0 top-0 dark:md:bg-customdark  flex-col items-center justify-center    p-1 '>
<div className='flex flex-col items-center z-30 md:z-0 justify-center h-fit py-3 gap-4  md:gap-7 md:dark:bg-customdark dark:bg-gray-200  bg-gray-200  md:bg-transparent rounded-r-full  md:rounded-r-none p-2 '>
<div className='flex flex-col gap-5 md:gap-2 '>
<h1 className='font-extrabold text-sm text-customdark text-center dark:text-gray-200 border-b-2 border-gray-500 hidden md:block'>Filter By Category</h1>
<div className='flex flex-col gap-5 md:gap-1'>
<span className='rounded-xl cursor-pointer md:p-2  md:bg-customdark md:text-gray-200 dark:text-customdark  dark:bg-gray-200  flex items-center gap-1 hover:bg-customdark dark:hover:bg-gray-200'> <BsHeadphones className='md:mr-2 h-6 w-6  md:h-4 md:w-4 '/><span className='hidden font-bold  md:block'> Headphone</span> </span>
<span className='rounded-xl cursor-pointer md:p-2 md:bg-customdark md:text-gray-200 dark dark:bg-gray-200 dark:text-customdark flex items-center gap-1 hover:bg-customdark dark:hover:bg-gray-200'> <GiEarbuds className='h-6 w-6  md:h-4 md:w-4 md:mr-2  '/><span className='hidden md:block font-bold '> Earphone</span> </span>
<span className='rounded-xl cursor-pointer md:p-2 md:bg-customdark md:text-gray-200 dark:bg-gray-200 dark:text-customdark flex items-center gap-1 hover:bg-customdark dark:hover:bg-gray-200'> <BsSpeakerFill className='md:mr-2 w-6 h-6 md:h-4 md:w-4 '/><span className='hidden md:block font-bold'> Speaker</span> </span>
<span className='rounded-xl cursor-pointer md:p-2 md:bg-customdark md:text-gray-200 dark:bg-gray-200 dark:text-customdark flex items-center gap-1 hover:bg-customdark dark:hover:bg-gray-200'> <GiEarbuds className='md:mr-2 h-6 w-6 md:h-4 md:w-4 '/><span className='hidden md:block font-bold '> Neckband</span> </span>
<span className='rounded-xl cursor-pointer md:p-2 md:bg-customdark md:text-gray-200 dark:bg-gray-200 dark:text-customdark flex items-center gap-1 hover:bg-customdark dark:hover:bg-gray-200'> <BsEarbuds className='md:mr-2 h-6 w-6  md:h-4 md:w-4 '/><span className='hidden md:block font-bold'> Earbud</span> </span>



    </div>
</div>




<div className='flex flex-col gap-5 md:gap-2  '>

<h1 className='font-extrabold text-sm text-center  text-customdark dark:text-gray-200 border-b-2 border-gray-500 hidden md:block'>Sort By Price</h1>
<div className='flex flex-col gap-4 md:gap-1'>
<span className='rounded-xl cursor-pointer md:p-2 md:bg-customdark md:text-gray-200 dark:bg-gray-200 dark:text-customdark flex items-center gap-1 hover:bg-customdark dark:hover:bg-gray-200'> <FaSortAmountDown className='md:mr-2 md:h-4 md:w-4 h-6 w-6 '/><span className='hidden md:block font-bold'>High to low</span></span>
<span className='rounded-xl cursor-pointer  md:p-2 md:bg-customdark md:text-gray-200 dark:bg-gray-200 dark:text-customdark flex items-center gap-1 hover:bg-customdark dark:hover:bg-gray-200'> <FaSortAmountUp className='md:mr-2 md:h-4 md:w-4  h-6 w-6  '/><span className='hidden md:block font-bold'>Low to high </span></span>
</div>

</div>



</div>
        </div>
    )
}


export default Filter;