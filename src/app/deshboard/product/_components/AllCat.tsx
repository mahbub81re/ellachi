
import { useEffect, useState } from "react"

interface Cate {
  _id:string,
  categoryName:string

}
export default   function  AllCat({s_cat}:{s_cat:string}) {
     const [catagories, setCat]= useState<Cate[]|[]>([])
      useEffect(()=>{ getCatagoy()},[1])
      
  

    async function getCatagoy(){
        const res = await fetch("/api/common/categories/all_cat",{method:"GET"});
        const data = await res.json();
        setCat(data.data)
    }
  return (
    <>
    {catagories.map((opt)=>( <option key={opt._id} selected={s_cat===opt._id} value={opt._id}>{opt.categoryName}</option>))} 
    
    </>
  )
}
