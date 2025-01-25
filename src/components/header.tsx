"use client"
import React, { useState } from 'react'
import Logo from './logo'
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import Sidebar from './sidebar';

export default function Header() {
  const [openSidebar,setOpenSidebar]= useState(false);
  return (
    <div className='flex flex-row justify-between'>
        <div className='flex flex-row justify-start relative'>
           {!openSidebar && <div className='m-1' onClick={()=>setOpenSidebar(true)}>
              <AiOutlineBars size={30} />
            </div>}
            {openSidebar &&<div className='m-1 fixed right-2 top-2 z-50 text-white' onClick={()=>setOpenSidebar(!openSidebar)}>
               <AiOutlineClose size={30}/>
            </div>}
            <div className='relative'  >
             {openSidebar && 
             <>
              <div className=' absolute w-screen h-screen  bg-black/60 left-0   z-10' ></div>
              <Sidebar  />
              </>
              }
            </div>
            { !openSidebar &&<Logo/>}
        </div>
        
        <div>
            <div>Profile</div>
            <div>Favurite</div>
            <div>Beg</div>
        </div>
        
        </div>
  )
}
