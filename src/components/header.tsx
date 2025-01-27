"use client"
import React, { useState } from 'react'
import Logo from './logo'
import { AiFillCaretRight, AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

import Sidebar from './sidebar';
import Link from 'next/link';

export default function Header() {
  const [openSidebar,setOpenSidebar]= useState(false);
  return (
    <div className='flex flex-row justify-between bg-white shadow-sm py-2'>
        <div className='flex flex-row justify-start relative'>
           {!openSidebar && <div className='m-1 flex flex-col justify-center' onClick={()=>setOpenSidebar(true)}>
              <AiFillCaretRight  size={30} />
            </div>}
            {openSidebar &&<div className='m-1 fixed right-2 top-2 z-50 text-white' onClick={()=>setOpenSidebar(!openSidebar)}>
               <AiOutlineClose size={30}/>
            </div>}
            <div className='relative'  >
             {openSidebar && 
             <>
              <div className=' absolute w-screen h-screen  bg-black/60 left-0   z-10' onClick={()=>setOpenSidebar(!openSidebar)} ></div>
              <Sidebar  />
              </>
              }
            </div>
            { !openSidebar &&<Logo/>}
        </div>




        <div>
          <div className='w-[350px] h-12 bg-white border-2 rounded-full m-1 flex max-md:hidden'>
            <input type='text' name='search' placeholder='Search entire store here' className=' pl-2 bg-transparent  border-none h-12'/>
             <select className='w-[80px] h-12 bg-transparent border-none pr-2 '>
               <option>Cat1</option>
               <option>Cat1</option>
               <option>Cat1</option>
               <option>Cat1</option>
             </select>
             <button type='submit' className='h-12 w-16 rounded-r-full  -mt-[2px]  flex justify-center '>
             <div className='flex flex-col justify-center m-auto text-skin-primary'>
              <IoSearchSharp  size={30}/>
              </div>
            </button>
          </div>
        </div>
        





        <div className='flex mx-4 '>
            <div className='mx-2 my-auto'><Link href="/"><AiFillHeart size={30}/></Link></div>
            <div className='mx-2 my-auto'><Link href="/"><CgProfile size={30}/></Link></div>
            <div className='mx-2 my-auto'><Link href="/"><FaShoppingCart size={30}/></Link></div>
        </div>
        
        </div>
  )
}
