"use client"
import React, { use, useEffect, useState } from 'react'
import AllCat from './../_components/AllCat';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';


export default  function Product({ params }: { params: Promise<{ id: string }> }) {
   const router =  useRouter()
  const {id} =use(params);
  const [product, setProduct] = useState({
        _id:"",
        productName: '',
        productDescription: '',
        productImage: '',
        productSlug: '',
        productPrice: 0,
        productDPrice:0,
        productQuantity: 0,
        productFeatured: true,
        productCategory: '',
        mesurType:"",
  });
  const [error , setError] = useState("")
  const [loading , setLoading] = useState(false)

useEffect(()=>{
  getProduct()
},[])
  


 async function getProduct(){
     const res = await fetch("/api/common/products/product?id="+id ,{method:"GET",cache:"no-store"});
     const data = await res.json();
     console.log(data)
     setProduct(data.data)
 }




  const handleInputChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
     
    return setProduct((prevInfo) => ({ ...prevInfo, [name]: value }));
  };


  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    const { name, value } = e.target;
     
    return setProduct((prevInfo) => ({ ...prevInfo, [name]: value }));
  }


const handleTextarea =(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
  const { name, value } = e.target;
     
    return setProduct((prevInfo) => ({ ...prevInfo, [name]: value }));
}

  const handleSubmit  =async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setLoading(true);
    console.log("adding.")
    try {
      if ( !product.productName || !product.productDescription || !product.productImage || !product.productSlug || !product.productPrice || !product.productQuantity || !product.productCategory || !product.mesurType) {
        setError("please fill all the fields");
        return;
      }
      const res = await fetch("/api/admin/products/update?id="+id,{method:"POST" , body:JSON.stringify(product)});
      if (res.status == 200 || res.status == 201) {
        console.log("user added successfully");
          router.push("/deshboard/products")
        setError("");
      }
    } catch (error) {
      console.log(error);
      setError("");
    } finally {
      setLoading(false);
    
    }
  }
  return (
  
    <div className='flex pt-24 flex-col justify-center items-center'>
      {loading && "Loading.."}
      {error && "Error.."}
      <div className='w-[450px]  bg-gray-300'>
        <form className="w-full px-5 py-6 space-y-6"
              onSubmit={handleSubmit} >
           <div className="flex flex-col w-full lg:px-5">
                <label className="text-sm">productName</label>
                <div className="bg-white flex justify-start items-start py-3 px-4 rounded text-slate-600 text-lg mt-1">
                  <input
                    type={"text"}
                    placeholder="John Doe"
                    name="productName"
                    className="outline-none w-full px-4"
                    value={product.productName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full lg:px-5">
                <label className="text-sm">productDescription</label>
                <div className="bg-white flex justify-start items-start py-3 px-4 rounded text-slate-600 text-lg mt-1">
                  <textarea
                    placeholder="..."
                    name="productDescription"
                    className="outline-none w-full px-4"
                    value={product.productDescription}
                    onChange={handleTextarea}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full lg:px-5">
                <label className="text-sm">productImage</label>
                <div className="bg-white flex justify-start items-start py-3 px-4 rounded text-slate-600 text-lg mt-1">
                  <input
                    type={"textarea"}
                    placeholder="..."
                    name="productImage"
                    className="outline-none w-full px-4"
                    value={product.productImage}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full lg:px-5">
                <label className="text-sm">product Price</label>
                <div className="bg-white flex justify-start items-start py-3 px-4 rounded text-slate-600 text-lg mt-1">
                  <input
                    type={"text"}
                    placeholder="..."
                    name="productSlug"
                    className="outline-none w-full px-4"
                    value={product.productSlug}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full lg:px-5">
                <label className="text-sm">Discount Price</label>
                <div className="bg-white flex justify-start items-start py-3 px-4 rounded text-slate-600 text-lg mt-1">
                  <input
                    type={"number"}
                    placeholder="..."
                    name="productPrice"
                    className="outline-none w-full px-4"
                    value={product.productPrice}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full lg:px-5">
                <label className="text-sm">---</label>
                <div className="bg-white flex justify-start items-start py-3 px-4 rounded text-slate-600 text-lg mt-1">
                  <input
                    type={"number"}
                    placeholder="..."
                    name="productDPrice"
                    className="outline-none w-full px-4"
                    value={product.productDPrice}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full lg:px-5">
                <label className="text-sm">productQuantity</label>
                <div className="bg-white flex justify-start items-start py-3 px-4 rounded text-slate-600 text-lg mt-1">
                  <input
                    type={"number"}
                    placeholder="..."
                    name="productQuantity"
                    className="outline-none w-full px-4"
                    value={product.productQuantity}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full lg:px-5">
                <label className="text-sm">Mesur Type</label>
                <div className="bg-white flex justify-start items-start py-3 px-4 rounded text-slate-600 text-lg mt-1">
                  <input
                    type={"text"}
                    placeholder="KG"
                    name="mesurType"
                    className="outline-none w-full px-4"
                    value={product.mesurType}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full lg:px-5">
                <label className="text-sm">productCategory</label>
                <div className="bg-white flex justify-start items-start py-3 px-4 rounded text-slate-600 text-lg mt-1">
                  <select  name="productCategory"  onChange={handleSelectChange}  value={product.productCategory}>
                   <AllCat s_cat={product.productCategory}/>
                  </select>
                </div>
              </div>
              <div className="flex flex-col w-full lg:px-5">
                <div className="bg-white flex justify-start items-start py-3 px-4 rounded text-slate-600 text-lg mt-1">
                   <Button type="submit">Submit</Button>
                </div>
              </div>
        </form>
      </div>
    </div>
  )
  }