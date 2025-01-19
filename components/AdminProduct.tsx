import React from 'react'
import Image from "next/image"
import headphone from "@/public/headphone.jpg"

import {MdDelete} from "react-icons/md";
import {FaEdit} from "react-icons/fa"

 const AdminProduct = () => {
  return (
    <div className='flex  items-center justify-between dark:bg-gray-700  bg-gray-200 rounded-xl gap-8 p-3 w-full md:w-[500px]' >
<div className='flex items-center justify-center p-2 '>

<Image 

height={100}
width={100}
src={headphone}

alt="Product image"
/>

</div>
<div className='flex flex-col gap-2'>
<h1>Red headphonw with smooth cousion</h1>
<p>Rs.570</p>
    <div className='flex items-center gap-10 '>

<FaEdit className='cursor-pointer text-2xl text-green-700' />
<MdDelete className='cursor-pointer text-2xl text-red-700' />

    </div>
</div>


    </div>
  )
}

export default AdminProduct