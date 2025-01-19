import React from 'react'
import AdminProduct from "@/components/AdminProduct"

const page = () => {
  return (
    <div className='flex flex-col gap-2 w-full h-screen p-1'>

{
  Array.from({length:10}).map((_, index:number)=>(
    <AdminProduct key={index} />
  )
)}

    </div>
  )
}


export default page