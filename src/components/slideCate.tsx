"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SideCate = () => {
  const [cates, setCates] = useState([
    {   
        id:1,
        name:"cat1",
        image:"1.png"
    },
    {   
        id:2,
        name:"cat2",
        image:"2.png"
    },
    {   
        id:3,
        name:"cat3",
        image:"3.png"
    },
    {   
        id:4,
        name:"cat4",
        image:"4.png"
    },
    {   
        id:5,
        name:"cat5",
        image:"5.png"
    },
]);
  

  const handleNext = () => {
    setCates((prev) => {
        const newItems = [...prev.slice(1), prev[0]];
      return newItems;
    });

  };


  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 15000);

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
          transition={{ duration: 2 }}
           >
          {cates.slice(0, 3).map((item,index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/3 p-4 flex flex-row justify-center  text-center"
            >
               <Image alt={item.name} width={200} height={200} src={"/slider2/"+item.image}/>
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



// import React from 'react'

// export default function SideCate() {
//   return (
//     <div className='w-full flex flex-col'>
//       <div className='flex flex-row justify-center'>
//         <div className=' text-2xl font-bold m-5 border-b-2'>CATEGORIES</div>
//       </div>
//       <div className='flex flex-row justify-center relative '>
//         <div className='w-full h-56 md:w-4/5  overflow-hidden bg-gray-400'>
//           <div className=''>
//             card1
//           </div>
//           <div className=''>
//           card1
//           </div>
//           <div className=''>
//           card1
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }






