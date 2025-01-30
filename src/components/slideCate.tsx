"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
interface Category{
    
  _id:string;
  categoryName:string;
  categoryDescription:string;
  categoryImage:string;
  categorySlug:string;
  subcategories:[
  
  ];
    }

const SideCate = () => {
     const [categories, setCategories]= useState<Category [] | []>([])
  

  
useEffect(()=>{
    
      getCategories()
    },[])


async function getCategories(){
  const res = await fetch("/api/common/categories");
  const data = await res.json();
  console.log(data.data)
  setCategories(data.data)
}


  const handleNext = () => {
    setCategories((prev) => {
        const newItems = [...prev.slice(1), prev[0]];
      return newItems;
    });

  };


  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (

    <div className='w-full flex flex-col'>
        
          <div className='flex flex-row justify-center'>
            <div className=' text-2xl font-bold m-5 border-b-2'>CATEGORIES</div>
          </div>

      <div className="flex flex-row justify-center items-center">
       <div className="relative  max-w-4xl mx-auto w-[90%]">
         <div className="overflow-hidden ">
          <motion.div
          className="flex gap-2"
          initial={{ x: 0 }}
          animate={{ x: -0 }}
          transition={{ duration: 5 }}
           >
          {categories.slice(0, 3).map((item) => (
            <div
              key={item._id}
              className="flex-shrink-0 w-1/3 p-4  justify-center relative  text-center"
            >
             <Link href={"/products/"+item._id}>  
             <Image alt={item._id} width={200} height={200} src={item.categoryImage}/>
             </Link>
             <div className=" absolute bottom-5 left-5 bg-white rounded-md p-2">{item.categoryName}</div>
            </div>
          ))}
          </motion.div>
        </div>
       </div>
    </div>
    
    </div>
  );
};

export default SideCate;


