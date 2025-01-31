"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { AiFillHeart, AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import { CiHome } from "react-icons/ci";
import { FaShoppingCart } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import Allcategories from './allcategories';
import { usePathname } from 'next/navigation'


export default function Footnav() {
  const [cateOpener, setCateOpener] = useState(false);
  const pathname = usePathname()
  

  return (
    <div className=' fixed bottom-0 w-screen h-14 text-gray-500 flex flex-row justify-around  md:hidden bg-white '> 
       <div className='relative'  >
                 
                   <>
                   
                               {cateOpener &&<>
                                <div className=' fixed w-screen h-screen  bg-black/60 left-0 top-0  z-10'  onClick={()=>setCateOpener(!cateOpener)} >
                                <div className='m-1 fixed right-2 top-2 z-50 text-white' >
                              <AiOutlineClose size={30}/>
                               </div>
                                
                                </div>
                               <Allcategories/>
                               </>
                             }
                    </>
                   
         </div>
      <div className='flex flex-row justify-center w-1/5'>
        <div className={'flex flex-col justify-center '+ (pathname=="/" && " text-pink-400")}>
         
           <Link href="/">
               <div>
                <CiHome size={20} className='mx-auto'/>
               </div>
               <div className=' text-[12px]'>
                HOME
                </div> 
            </Link>
        </div>
      </div>

      <div className='flex flex-row justify-center border-l-2 w-1/5'>
      <div className={'flex flex-col justify-center '+ (pathname=="/shop" && " text-pink-400")}>
           <Link href="/">
             <div>
               <FaShop size={20} className='mx-auto'/>
             </div>
             <div className='text-[12px]'>
               SHOP
             </div> 
            </Link>
        </div>
      </div>

      <div className='flex flex-row justify-center border-l-2 w-1/5'>
      <div className={'flex flex-col justify-center '+ (pathname=="/loved" && " text-pink-400")}>
           <Link href="/loved">
             <div>
               <AiFillHeart size={20} className='mx-auto'/>
            </div>
            <div className=' text-[12px]'>
             FAVOURITE
            </div> 
            </Link>
        </div>
      </div>

      <div className='flex flex-row justify-center border-l-2 w-1/5'>
        <div className='flex flex-col justify-center px-2' onClick={()=>setCateOpener(!cateOpener)}>
          
            <div>
             <AiOutlineBars size={25} className='mx-auto'/>
            </div>
            <div className=' text-[10px]'>
             CATEGORIES
            </div> 
         
        </div>
      </div>

      <div className='flex flex-row justify-center border-l-2 w-1/5 '>
      <div className={'flex flex-col justify-center '+ (pathname=="/bag" && " text-pink-400")}>
         <Link href="/bag">
           <div>
            <FaShoppingCart size={20} className='mx-auto'/>
            </div>
           <div className=' text-[12px]'>
             BAG
            </div> 
            </Link>
        </div>
      </div>
     
    </div>
  )
}
