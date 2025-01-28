import Footer from '@/components/footer'
import Footnav from '@/components/footnav'
import Header from '@/components/header'
import { Card } from 'flowbite-react'
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
            
            <div className='flex flex-row justify-center p-4'>
             <div className="grid max-sm:grid-cols-2 max-md:grid-cols-2 max-xl:grid-cols-4 grid-cols-5 gap-3">

                
                <Card
                      className="max-w-sm"
                      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                      imgSrc="/slider2/1.png"
                    >
                      <a href="#">
                        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                        </h5>
                      </a>
                      <div className="mb-1 mt-1 flex flex-row items-center">
                       
                      <span className="text-xl font-bold  dark:text-white pr-2 text-red-500"><del>$599</del></span>
                      <span className="text-xl font-bold text-green-900 dark:text-white">$400</span>
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
                        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                        </h5>
                      </a>
                      <div className="mb-1 mt-1 flex flex-row items-center">
                       
                      <span className="text-xl font-bold  dark:text-white pr-2 text-red-500"><del>$599</del></span>
                      <span className="text-xl font-bold text-green-900 dark:text-white">$400</span>
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
                        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                        </h5>
                      </a>
                      <div className="mb-1 mt-1 flex flex-row items-center">
                       
                      <span className="text-xl font-bold  dark:text-white pr-2 text-red-500"><del>$599</del></span>
                      <span className="text-xl font-bold text-green-900 dark:text-white">$400</span>
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
                        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                        </h5>
                      </a>
                      <div className="mb-1 mt-1 flex flex-row items-center">
                       
                      <span className="text-xl font-bold  dark:text-white pr-2 text-red-500"><del>$599</del></span>
                      <span className="text-xl font-bold text-green-900 dark:text-white">$400</span>
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

    <Footer/>
    <Footnav/> 
    </div>
  )
}
