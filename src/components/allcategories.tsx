import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
interface Category{
    
  _id:string;
  categoryName:string;
  categoryDescription:string;
  categoryImage:string;
  categorySlug:string;
  subcategories:[
  
  ];
    }


export default function Allcategories() {
  const [catagories, setCat]= useState([])
  
  useEffect(()=>{
     getCatagoy()
  },[])

  async function getCatagoy(){
      const res =await fetch("/api/common/categories");
      const data = await res.json();
      if(data.success===false){
       toast.error("Network Problem! please reload the page or check your connection");
      }else{
        setCat(data.data)
      }
  }


  return (
    <div className='w-[300px] h-screen bg-white fixed top-0 left-0 z-40'>
          <div className=' mt-8 flex justify-left ml-8 text-2xl font-bold  border-b-2 w-3/4 border-gray-300'>
           Categories
          </div>
    <div className=' -mt-[2px] flex justify-left ml-8 text-2xl font-bold  border-b-2 w-[100px] border-pink-300 mb-4'/>
    <>
    {catagories.map((category:Category)=>{
            
            return(
               <div key={category._id} className='  flex justify-left ml-[40px] text-xl font-bold  w-3/4 border-pink-300'>
                  <Link href={"/"}>{category.categoryName}</Link> 
             </div > )
    }
  )}
    </>
 </div>
  )
}
