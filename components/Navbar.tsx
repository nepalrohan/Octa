import React from "react";
import Search from "./Search";
import CartDropDown from "./CartDropDown";
import UserDropDown from "./UserDropDown";
import {ThemeChanger} from "./ThemeChanger";
import Menu from "./Menu";
import Signup from "@/components/Signup"
const login= false;

const Navbar = () => {
  return (
    <div className="flex bg-white dark:bg-customdark items-center justify-between  px-8 py-4 shadow-sm shadow-slate-400 dark:shadow-gray-300 sticky top-0 left-0 z-50">
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
  );
};

export default Navbar;
