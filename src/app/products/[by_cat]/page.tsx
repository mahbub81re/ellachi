"use client"
import { use } from "react";
import Footer from '@/components/footer'
import Footnav from '@/components/footnav'
import Header from '@/components/header'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import Image from "next/image";
import { Card } from "flowbite-react";
import Link from "next/link";
import { MdFavorite } from "react-icons/md";
interface Category{
    
    _id:string;
    categoryName:string;
    categoryDescription:string;
    categoryImage:string;
 
      }
      

      interface Product{
        _id:string;
        productName:string;
        productDescription:string;
        productImage:string;
        productSlug:string;
        productPrice:number;   
        productDPrice:number;
        productQuantity:number;
        productFeatured:boolean;
        productCategory:string;
        mesurType:string;
    
      }


export default function ProductByCat({ params }: { params: Promise<{ by_cat: string }> }) {
    const { by_cat } = use(params);
    const [loading,setLoading]= useState(true);
    const [ploading,setPLoading]= useState(true);
   const [products , setProducts] = useState<Product[]|[]>([])
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

  const  [catagory, setCat] = useState<Category>({
    _id:"",
    categoryName:"",
    categoryDescription:"",
    categoryImage:"/"
  })

  useEffect(()=>{
      get_cat()
      get_products()
  },[])

    async function get_cat(){
        const res = await fetch("/api/common/categories/one?id="+by_cat);
        const data = await res.json();
        if(data.success===false){
          toast.error(data.message)
        }else{
            setLoading(false)
            setCat(data.data)
        }
      }

      

      async function get_products(){
        const res = await fetch("/api/common/products/by_cat?id="+by_cat);
        const data = await res.json();
        if(data.success===false){
          toast.error(data.message)
        }else{
            setPLoading(false)
           
            setProducts(data.data)

        }
      }

  return (
    <div>
    <Header/>
    
      {loading?"Loading..":
      <div className="flex flex-row justify-center md:w-full lg:w-4/5 w-4/5 mx-auto">
           <div><Image src={catagory.categoryImage} alt={catagory.categoryName} width={200} height={200}/>  </div>
           <div className="p-2 flex flex-col ">
               <div className="p-2 bg-slate-600 text-white">{catagory.categoryName}</div>
               <div>{catagory.categoryDescription}</div>
           </div>
       </div>
      }
     

     {ploading?"Loading..":
     <div className='w-full flex flex-col'>
             
               <div className='flex flex-row justify-center'>
                 <div className=' text-2xl font-bold m-5 border-b-2'>PRODUCTS</div>
               </div>
     
               <div className='flex flex-row justify-center p-4'>
               <div className="grid max-sm:grid-cols-2 max-md:grid-cols-2 max-xl:grid-cols-4 grid-cols-5 gap-3">
     
                   
     
               {products.map((product)=>{

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
      }
     

    







    <Footer/>
    <Footnav/>
    </div>
  )
}
