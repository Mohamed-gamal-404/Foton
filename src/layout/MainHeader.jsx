import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsList } from "react-icons/bs";
export default function MainHeader() {
const [isOpen , setIsOpen]=useState(false)
const [isSerachOpen ,SetIsSearchOpen] = useState(false)
function searchHide(){
  if(window.innerWidth < 640){
    SetIsSearchOpen(!isSerachOpen)
  }
}
  return (
<>
    <header className=" flex justify-between items-center p-[2rem] ">
      <div className="header-Logo"> 
        <h1 className="text-3xl sm:font-bold">Exclusive</h1>
      </div>
      <nav className={`MainHeaderUL-parent ${ isOpen ? "hidden" : "block"}  sm:flex relative `}>
        <ul className="MainHeader-ul flex flex-col w-25 h-45 p-5 justify-center items-center bg-gray-100 z-50 gap-5 cursor-pointer absolute top-5 right-[-10.3rem] transition duration-300 rounded-sm shadow-lg shadow-red-700/50 sm:flex-row sm:bg-white sm:w-40 sm:h-2 sm:shadow-none sm:static sm:z-0">
          <li className="hover:text-[#DB4444] transition duration-300">Home</li>
          <li className="hover:text-[#DB4444] transition duration-300 ">Contact</li>
          <li className="hover:text-[#DB4444] transition duration-300 ">About</li>
          <li className="hover:text-[#DB4444] transition duration-300 whitespace-nowrap ">Sign Up</li>
        </ul>
      </nav>
      <div className="MainHeader-SearchBar">
          <div className="Search-Bar relative">
             <div className="Header-icons relative flex gap-2 items-center text-3xl">
                 <CiSearch className=" cursor-pointer sm:absolute sm:top-2 sm:right-0 sm:text-2xl sm:rounded-sm font-bold flex items-center justify-center " onClick={searchHide} />
              <BsList className="sm:hidden  " onClick={()=> setIsOpen(!isOpen)} id="List-Header"/>
             </div>
            <input className={`absolute top-14 w-90 h-10  left-[-17rem] mb-[-20rem] mt-5 sm:w-55 bg-gray-100 p-1 sm:mb-0 sm:mt-0 sm:static sm:top-1 sm:left-0 ${isSerachOpen ? "hidden" : "block"} outline-[#DB4444] `} htmlFor="" placeholder="What Are You Loking For?"/>
          </div>
        </div>
    </header>
    <hr className="text-gray-300" />
</> 
  );
}
