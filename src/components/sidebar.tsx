import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='w-[300px] h-screen bg-white absolute z-40'>
       <div className=' mt-8 flex justify-left ml-8 text-2xl font-bold  border-b-2 w-3/4 border-gray-300'>
          Menu
       </div>
       <div className=' -mt-[2px] flex justify-left ml-8 text-2xl font-bold  border-b-2 w-[100px] border-pink-300 mb-4'/>
       <div className='  flex justify-left ml-[40px] text-xl font-bold  w-3/4 border-pink-300'>
        <Link href={"/"}>Home</Link> 
       </div >
       <div className='  flex justify-left ml-[40px] text-xl font-bold   w-3/4 border-pink-300'>
        <Link href={"/"}>Beg Collection</Link> 
       </div>
       <div className='  flex justify-left ml-[40px] text-xl font-bold   w-3/4 border-pink-300'>
        <Link href={"/"}>Contact Us</Link> 
       </div>
    </div>
  )
}
