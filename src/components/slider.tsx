"use client"
import React from 'react'

import { Carousel } from "flowbite-react";

export default function Sliderf() {
   

  return (
    <div className="h-56 sm:h-64 xl:h-[400px] 2xl:h-96">
    <Carousel>
      {data.map(d=>{
        return (
           
                 <img key={d.image} src={d.image} alt="Image" className='w-full'/>
         
        )
      })}
      </Carousel>
    </div>
  )
}


const data = [
    {
        name:"1st slide",
        image:"/slider1/1.png",
    },
    {
        name:"1st slide",
        image:"/slider1/2.png",
    },
    {
        name:"1st slide",
        image:"/slider1/3.png",
    },
    {
        name:"1st slide",
        image:"/slider1/4.png",
    }, {
        name:"1st slide",
        image:"/slider1/5.png",
    },
]