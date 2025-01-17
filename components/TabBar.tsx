"use client"

import {ThemeChanger} from "@/components/ThemeChanger"
import UserDropDown from "@/components/UserDropDown"
import CartDropDown from  "@/components/CartDropDown"
import { HomeIcon, ShoppingBagIcon, } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Signup from "@/components/Signup"


const login = false;
export default function TabBar(){

const pathname = usePathname()
    return (

        <div className='w-full md:hidden px-2 py-3 dark:bg-customdark dark:shadow-white  flex items-center shadow-customdark  gap-4 shadow-lg z-50 bg-white  justify-between h-15 sticky rounded-t-xl bottom-0 left-0'>

<Link className={`flex items-center gap-1 text-sm font-semibold`} href='/'><HomeIcon className={`${pathname ==="/" && "text-purple-600"} `}/></Link>
    <Link className={` flex items-center gap-1 text-sm font-semibold`}  href='/products'><ShoppingBagIcon className={`${pathname ==="/products" && "text-purple-600"}`}/></Link>
{
    login ?
<UserDropDown/>
:
<Signup/>
}
<CartDropDown/>
<ThemeChanger/>

        </div>
    )
}