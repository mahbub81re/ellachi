"use client"
import { Card } from 'flowbite-react'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { MdFavorite } from 'react-icons/md';
import { toast } from 'sonner';


type ProductData = {
  _id: string,
  productName: string,
  productImage: string,
  productPrice: number,
  productSlug:string,
  productQuantity: number,

};



export default function HomeProducts() {
  const [products, setProducts] = useState <ProductData[] | []> ([]);
  const [fetchingon, setFetching] = useState(true)
  const [loading,setLoading]= useState(false);
  const [items, setItems] = useState<string[]>([]);

    useEffect(() => {
    if (typeof window !== "undefined") {
      const storedItems = localStorage.getItem("items");
      setItems(storedItems ? JSON.parse(storedItems) : []);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        setFetching(true)
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  useEffect(()=>{
      if(fetchingon && products.length%10===0)  getProducts()
  },[fetchingon])


  async function getProducts() {
    setLoading(true)
       const res  = await fetch("/api/common/products?limit="+products.length)
     const data = await res.json();
     if(data.success===false){
      setFetching(false)
      toast.error(data.message);
     }else{
      const fdata = data.data
      const cproducts = [...products, ...fdata];
        setProducts(cproducts)
        setFetching(false)
     }
     setLoading(false)
  }



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

  return (
    <div className='w-full flex flex-col'>
        
          <div className='flex flex-row justify-center'>
            <div className=' text-2xl font-bold m-5 border-b-2'>PRODUCTS</div>
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

  )
}
