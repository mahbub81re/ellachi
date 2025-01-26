import React from 'react'

export default function Logo() {
  return (
    <div className='flex flex-row relative mx-2 my-auto'>
        <div className='flex flex-col'>
            <div className='w-5 h-[5px] bg-[#1C2D10] mb-1'/>
            <div className='w-5 h-[5px] bg-[#1C2D10] mb-1'/>
            <div className='w-5 h-[5px] bg-[#1C2D10] mb-1'/>
        </div>
        <div className='text-3xl text-[#1C2D10] font-bold -mt-[6px] absolute left-6'>
            LLACHI
        </div>
    </div>
  )
}
