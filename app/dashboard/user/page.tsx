import React from 'react'
import UserCard from "@/components/UserCard"

const page = () => {
  return (
    <div className='flex flex-col gap-5 h-screen w-full'>

<div className='w-full flex gap-10 md:gap-20 items-center mb-4  px-3 '>
<div className='flex items-center justify-center shadow-lg rounded-xl p-4 md:text-2xl text-sm dark:shadow-gray-300 md:h-16 dark:shadow-md'>Total Users:420</div>
<div className='flex items-center justify-center shadow-lg rounded-xl p-4 md:text-2xl text-sm dark:shadow-gray-300 md:h-16 dark:shadow-md'>Monthly active User:207</div>
</div>

  <UserCard />


    </div>
  )
}

export default page