import Link from 'next/link';
import React from 'react'
import { AiFillHeart, AiOutlineBars } from 'react-icons/ai';
import { CiHome } from "react-icons/ci";
import { FaShoppingCart } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';

export default function Footnav() {
  return (
    <div className=' fixed bottom-0 w-screen h-14 text-gray-500 flex flex-row justify-around  md:hidden bg-white '> 
      <div className='flex flex-row justify-center w-1/5'>
        <div className='flex flex-col justify-center '>
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
        <div className='flex flex-col justify-center'>
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
        <div className='flex flex-col justify-center'>
           <Link href="/">
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
        <div className='flex flex-col justify-center px-2'>
          <Link href="/">
            <div>
             <AiOutlineBars size={25} className='mx-auto'/>
            </div>
            <div className=' text-[10px]'>
             CATEGORIES
            </div> 
            </Link>
        </div>
      </div>

      <div className='flex flex-row justify-center border-l-2 w-1/5 '>
        <div className='flex flex-col justify-center '>
         <Link href="/">
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
