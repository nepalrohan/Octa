"use client"


import React from "react";
import Search from "./Search";
import CartDropDown from "./CartDropDown";
import UserDropDown from "./UserDropDown";
import {ThemeChanger} from "./ThemeChanger";
import Menu from "./Menu";
import Signup from "@/components/Signup"
const login= true;

const Navbar = () => {

  return (
    <>
    <div className={` hidden  md:flex bg-white h-16 w-full  dark:bg-customdark items-center justify-between  px-8 py-4 shadow-sm fixed  top-0 left-0 z-50`}>
      <div className='flex items-center'>
<h1 className='text-4xl font-extrabold text-black dark:text-gray-200'>Octa</h1>


      </div>

      <div><Menu/></div>

      <div className='flex items-center gap-8'>

        
    
        <Search />

{
login ? 

        <UserDropDown />
:
<Signup/>
}
        <CartDropDown />

        <ThemeChanger />
        
      </div>
    </div>


<div className={`md:hidden flex items-center  justify-between  gap-10  px-4 py-3  bg-white  dark:bg-customdark fixed   top-0 right-0 z-40 `}>

<h1 className='text-4xl font-extrabold text-black dark:text-gray-200'>Octa</h1>
<Search />

  </div>
    </>

  );
};

export default Navbar;
