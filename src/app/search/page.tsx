import Footer from '@/components/footer'
import Footnav from '@/components/footnav'
import Header from '@/components/header'
import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'

export default function Search() {
  return (
    <div>
    <Header/>
   
      
    
            <div className=''>
              <div className='w-[350px] h-12 bg-white border-2 rounded-full m-1 flex '>
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
            

    <Footer/>
    <Footnav/> 
    </div>
  )
}
