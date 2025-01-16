import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='relative mt-4  '>
<div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-40 -z-10'>

</div>
<div className='flex justify-between py-8 items-center px-12 mb-2'>
<div className='flex flex-col gap-3'>
<h1 className='text-sm font-extrabold text-gray-600 dark:text-gray-400  underline'>Quick Links</h1>
<div className='flex flex-col gap-1 text-gray-600 dark:text-gray-400 text-sm font-medium'>
<Link  href='/'>Home</Link>
<Link  href='/products'>All Products</Link>

</div>

     </div>


<div>
<h1 className="text-gray-600 dark:text-gray-400 text-sm font-medium">
  © 2024 Octa
</h1>
      </div>


<div className='flex flex-col gap-2'>  

<h1 className='text-gray-600 dark:text-gray-400 text-sm font-medium'><span className='font-bold text-gray-700 dark:text-gray-300'>Contact:</span>071485167</h1>
<h1 className='text-gray-600 dark:text-gray-400 text-sm font-medium'><span className='font-bold text-gray-700 dark:text-gray-300'>Email:</span>octa.enquiry@gmail.com</h1>
<h1 className='text-gray-600 dark:text-gray-400 text-sm font-medium'><span className='font-bold text-gray-700 dark:text-gray-300'>Customer-Care:</span>071684275</h1>




</div>
</div>
    </div>
    </>
  )
}

export default Footer