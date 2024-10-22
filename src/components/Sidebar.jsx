import React from 'react'
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import { RiMovie2Line } from "react-icons/ri";
import { LuTv } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { FaPhone } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
function Sidebar() {
  return (
    <div className='fixed w-[20vw] min-h-screen bg-[#171717] border-r-2 border-white text-white px-3 py-3'>
       <h1 className='text-3xl font-extrabold ml-3 flex gap-4 mb-8'>  <BiSolidCameraMovie  />  Movie</h1>
       <h1 className='text-2xl font-extrabold ml-3 flex gap-4 mb-4 text-blue-300'>  New Feed</h1>


       <NavLink to='/trending' className='cursor-pointer flex gap-2 text-2xl ml-8 w-full mr-2 px-3 py-2 rounded-lg  hover:bg-blue-200 hover:text-black '> <FaFire/> Trending </NavLink>
       <button className='flex gap-2 text-2xl ml-8 w-full mt-3 mr-2 px-3 py-2 rounded-lg  hover:bg-blue-200 hover:text-black '> <GiStarsStack/> Popular </button>
       <button className='flex gap-2 text-2xl ml-8 w-full mt-3 mr-2 px-3 py-2 rounded-lg  hover:bg-blue-200 hover:text-black '> <RiMovie2Line/> Movies </button>
       <button className='flex gap-2 text-2xl ml-8 w-full mt-3 mr-2 px-3 py-2 rounded-lg  hover:bg-blue-200 hover:text-black '> <LuTv/> Tv Shows </button>
       <button className='flex gap-2 text-2xl ml-8 w-full mt-3 mr-2 px-3 py-2 rounded-lg  hover:bg-blue-200 hover:text-black mb-3'> <FaPeopleGroup/> People </button>
       <hr className='w-full rounded-full h-[1px] mt-4 mb-6'></hr>
       <h1 className='text-2xl font-extrabold ml-3 flex gap-4 mb-4 text-blue-300'> Site Info  </h1>
       {/* about */}
       <button className='flex gap-2 text-2xl ml-8 w-full mt-3 mr-2 px-3 py-2 rounded-lg  hover:bg-blue-200 hover:text-black '> <FcAbout/> About </button>
       <button className='flex gap-2 text-2xl ml-8 w-full mt-3 mr-2 px-3 py-2 rounded-lg  hover:bg-blue-200 hover:text-black mb-3'> <FaPhone/> Contact </button>
       
       
    </div>
  )
}

export default Sidebar
