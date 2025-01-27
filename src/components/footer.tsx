"use client"
import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import Logo from './logo'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  const [about,setAbout] = useState(true);
  const [info,setInfo] = useState(false);
  const [ser,setSer] = useState(false);
  return (
    <div className='p-5 flex flex-col pb-20 bg-indigo-100'>
      {/* About us  */}
       <div className='flex flex-col'>
          <div className=' flex flex-row justify-between border-b-2 pb-2  ' onClick={()=>setAbout(!about)} >
             <div className=' text-2xl'>About us</div> 
             <div><AiOutlineDown  size={24}/></div>
            
          </div>
         
         
         
          {about &&<div className='pt-2'>
             <Logo/>
             <div className='p-2'>
             Welcome to our online store! We are a team of passionate individuals who are dedicated to providing our customers with high-quality products and excellent service.
             </div>
             <div className='flex flex-row justify-start'>
               <div  className=' m-2'><FaFacebookSquare  size={24}/></div>
               <div  className=' m-2'>  <FaTwitter  size={24}/></div>
               <div  className=' m-2'>   <FaInstagram  size={24}/></div>
               <div  className=' m-2'>  <FaYoutube  size={24}/> </div>

              
             
             </div>
          </div>
}
       </div>



       <div className='flex flex-col mt-2'>
          <div className=' flex flex-row justify-between border-b-2 pb-2 ' onClick={()=>setInfo(!info)} >
             <div className=' text-2xl'>Information</div> 
             <div><AiOutlineDown  size={24}/></div>
            
          </div>

          {info && <div className='flex- flex-col m-3 text-md'>
           
            <div className=' hover:pl-2'> <Link href='/'> About Us</Link></div>
            <div className=' hover:pl-2'> <Link href='/'> Delivery Information</Link></div>
            <div className=' hover:pl-2'> <Link href='/'> Privacy Policy</Link></div>
            <div className=' hover:pl-2'> <Link href='/'> Terms & Conditions</Link></div>
            <div className=' hover:pl-2'> <Link href='/'> Contact Us</Link></div>
            <div className=' hover:pl-2'> <Link href='/'> Returns</Link></div>
          </div>}
        </div>



        <div className='flex flex-col'>
          <div className=' flex flex-row justify-between border-b-2 pb-2 ' onClick={()=>setSer(!ser)} >
             <div className=' text-2xl'>Customer Service</div> 
             <div><AiOutlineDown  size={24}/></div>
            
          </div>

        {ser &&<div className='flex- flex-col m-3 text-md'>
           
            <div className=' hover:pl-2'> <Link href='/'> Site Map</Link></div>
            <div className=' hover:pl-2'> <Link href='/'> Wish List</Link></div>
            <div className=' hover:pl-2'> <Link href='/'> Brands</Link></div>
            <div className=' hover:pl-2'> <Link href='/'> Gift Certificates</Link></div>
            <div className=' hover:pl-2'> <Link href='/'> Affiliate</Link></div>
            <div className=' hover:pl-2'> <Link href='/'> Specials</Link></div>
            <div className=' hover:pl-2'> <Link href='/'> Order Tracking</Link></div>
            
          </div>
        }
          
        </div>


        







    </div>
  )
}
