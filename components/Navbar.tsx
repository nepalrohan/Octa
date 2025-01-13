import React from "react";
import Search from "./Search";
import CartDropDown from "./CartDropDown";
import UserDropDown from "./UserDropDown";
import {ThemeChanger} from "./ThemeChanger";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between  px-8 py-4 ">
      <div className='flex items-center'>
<h1 className='text-4xl font-extrabold text-black dark:text-gray-200'>Octa</h1>


      </div>

      <div><Menu/></div>

      <div className='flex items-center gap-8'>

        
    
        <Search />


        <UserDropDown />
        <CartDropDown />

        <ThemeChanger />
        
      </div>
    </div>
  );
};

export default Navbar;
