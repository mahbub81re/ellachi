"use client"
import Footer from '@/components/footer'
import Footnav from '@/components/footnav'
import Header from '@/components/header'
import { Card } from 'flowbite-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdFavorite } from 'react-icons/md'
type Product = {
  _id: string,
  productName: string,
  productImage: string,
  productPrice: number,
  productSlug:string,
  productQuantity: number,

};


export default function LovedItems() {


  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<string[]>([]);


     useEffect(() => {
        if (typeof window !== "undefined") {
          const storedItems = localStorage.getItem("items");
          setItems(storedItems ? JSON.parse(storedItems) : []);
        }
      }, []);
    


      const addItem = (id: string) => {
        if(items.includes(id)){
            setItems((prevItems) => prevItems.filter((item) => item !== id));
          const newI=items.filter((item)=>item !==id)
          localStorage.setItem("items", JSON.stringify(newI)); 
        }else{
        const updatedItems = [...items, id];
        setItems(updatedItems);
        localStorage.setItem("items", JSON.stringify(updatedItems)); // Update storage
        }
      };



useEffect(()=>{
  fetchProducts()
},[items])

  const fetchProducts = async () => {
    setLoading(true);
  try {
    const response = await fetch("/api/common/products/by_ids",{method:"POST",body:JSON.stringify(items)});
    
      
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    
     const res = await response.json();
    const data: Product[] = res.data;
      console.log(data)
    setProducts(data);
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    setLoading(false);
  }
};



  return (
    <div>
    <Header/>
    
    <div className='w-full flex flex-col'>
        
        <div className='flex flex-row justify-center'>
          <div className=' text-2xl font-bold m-5 border-b-2'>FAVOURITE</div>
        </div>

        <div className='flex flex-row justify-center p-4'>
        <div className="grid max-sm:grid-cols-2 max-md:grid-cols-2 max-xl:grid-cols-4 grid-cols-5 gap-3">

            

              {loading?"Loading..":products.map((product)=>{
                    
                return(<Card
                  key={product._id}
                  className="max-w-sm relative"
                  imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                  imgSrc={product.productImage}
                >
                   <div className={' absolute  top-0 right-0 p-3 '+(items.includes(product._id)?"text-red-500":"text-white")} onClick={()=>addItem(product._id)}> <MdFavorite size={30} /> </div>
                  <Link href="/">
                    <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                     {product.productName}
                    </h5>
                   
                  <div className="mb-1 mt-1 flex flex-row items-center my-2">
                   
                  <span className="text-xl font-bold  dark:text-white pr-2 text-red-500"><del>${product.productSlug}</del></span>
                  <span className="text-xl font-bold text-green-900 dark:text-white">${product.productPrice}</span>
                  </div>
                  </Link>
                  <div className="flex flex-col ">
                  
                    <button
                      className="rounded-lg mb-1 bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    >
                      Add to cart
                    </button>
                    <button
                      className="rounded-lg bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    >
                    Buy Now
                    </button>
                  </div>
                </Card>)


             })
          }







    
         </div>
        </div>

  </div>

      



    <Footer/>
    <Footnav/>
    </div>
  )
}
