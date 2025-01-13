import { HomeIcon, LucideShoppingBasket } from 'lucide-react'
import Link from 'next/link'
import React from 'react'



const Menu = () => {
  return (
<div className='flex items-center gap-8 '>
    <Link className='flex items-center gap-1' href='/'><HomeIcon/>Home</Link>
    <Link className='flex items-center gap-1' href='/products'><LucideShoppingBasket/>Products</Link>

</div>
  )
}

export default Menu