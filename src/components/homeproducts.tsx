import { Card } from 'flowbite-react'
import React from 'react'

export default function HomeProducts() {
  return (
    <div className='w-full flex flex-col'>
        
          <div className='flex flex-row justify-center'>
            <div className=' text-2xl font-bold m-5 border-b-2'>PRODUCTS</div>
          </div>

          <div className='flex flex-row justify-center p-4'>
          <div className="grid max-sm:grid-cols-2 max-md:grid-cols-2 max-xl:grid-cols-3 gap-2">

              


          <Card
      className="max-w-sm"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc="/slider2/1.png"
    >
      <a href="#">
        <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </a>
      <div className="mb-1 mt-1 flex flex-row items-center">
       
       <span className="text-xl font-bold text-gray-900 dark:text-white">$599</span>
       <span className="text-xl font-bold text-gray-900 dark:text-white">$599</span>
      </div>
      <div className="flex flex-col ">
       
        <a
          href="#"
          className="rounded-lg mb-1 bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
        <a
          href="#"
          className="rounded-lg bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
        Buy Now
        </a>
      </div>
    </Card>



    <Card
      className="max-w-sm"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc="/slider2/1.png"
    >
      <a href="#">
        <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </a>
      <div className="mb-1 mt-1 flex flex-row items-center">
       
       <span className="text-xl font-bold text-gray-900 dark:text-white">$599</span>
       <span className="text-xl font-bold text-gray-900 dark:text-white">$599</span>
      </div>
      <div className="flex flex-col ">
       
        <a
          href="#"
          className="rounded-lg mb-1 bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
        <a
          href="#"
          className="rounded-lg bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
        Buy Now
        </a>
      </div>
    </Card>



      
           </div>
          </div>

    </div>

  )
}
