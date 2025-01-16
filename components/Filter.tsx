
import {Button} from "@/components/ui/button"
import {BsEarbuds} from "react-icons/bs";
import {GiEarbuds} from "react-icons/gi"
import {BsHeadphones} from "react-icons/bs";
import {BsSpeakerFill} from "react-icons/bs"
import {FaSortAmountUp} from "react-icons/fa"
import {FaSortAmountDown} from "react-icons/fa"

const Filter = () =>{

    return (




        <div className=' hidden sm:flex w-full h-full overflow-hidden sticky left-0 top-0   flex-col items-center justify-center gap-10 bg-gray-100 dark:bg-customdark dark:border-r-2 dark:border-gray-500'>

<div className='flex flex-col gap-2'>
<h1 className='font-extrabold text-sm text-customdark text-center dark:text-gray-200 border-b-2 border-gray-500'>Filter By Category</h1>
<div className='flex flex-col gap-1'>
<Button className='rounded-full bg-customdark text-gray-200 dark:bg-gray-200 dark:text-customdark flex items-center gap-1 hover:bg-customdark dark:hover:bg-gray-200'> <BsHeadphones className='mr-2 h-4 w-4 '/> Headphone </Button>
<Button className='rounded-full bg-customdark text-gray-200 dark:bg-gray-200 dark:text-customdark flex items-center gap-1 hover:bg-customdark dark:hover:bg-gray-200'> <GiEarbuds className='mr-2 h-4 w-4 '/> Earphone </Button>
<Button className='rounded-full bg-customdark text-gray-200 dark:bg-gray-200 dark:text-customdark flex items-center gap-1 hover:bg-customdark dark:hover:bg-gray-200'> <BsSpeakerFill className='mr-2 h-4 w-4 '/> Speaker </Button>
<Button className='rounded-full bg-customdark text-gray-200 dark:bg-gray-200 dark:text-customdark flex items-center gap-1 hover:bg-customdark dark:hover:bg-gray-200'> <GiEarbuds className='mr-2 h-4 w-4 '/> Neckband </Button>
<Button className='rounded-full bg-customdark text-gray-200 dark:bg-gray-200 dark:text-customdark flex items-center gap-1 hover:bg-customdark dark:hover:bg-gray-200'> <BsEarbuds className='mr-2 h-4 w-4 '/> Earbud </Button>



    </div>
</div>




<div className='flex flex-col gap-2  '>

<h1 className='font-extrabold text-sm text-center  text-customdark dark:text-gray-200 border-b-2 border-gray-500'>Sort By Price</h1>
<div className='flex flex-col gap-1'>
<Button className='rounded-full bg-customdark text-gray-200 dark:bg-gray-200 dark:text-customdark flex items-center gap-1 hover:bg-customdark dark:hover:bg-gray-200'> <FaSortAmountDown className='mr-2 h-4 w-4 '/>High to low</Button>
<Button className='rounded-full bg-customdark text-gray-200 dark:bg-gray-200 dark:text-customdark flex items-center gap-1 hover:bg-customdark dark:hover:bg-gray-200'> <FaSortAmountUp className='mr-2 h-4 w-4 '/>Low to high</Button>
</div>

</div>




        </div>
    )
}


export default Filter;