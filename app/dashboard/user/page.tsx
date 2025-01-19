import React from 'react'
import UserCard from "@/components/UserCard"

const page = () => {
  return (
    <div className='flex flex-col gap-2 p-3  h-screen w-full'>

      <div className='flex items-center justify-center mb-4'>
        Total:10
      </div>
{Array.from({length:10}).map((_, index:number)=>(

  <UserCard key={index} />
))}

    </div>
  )
}

export default page