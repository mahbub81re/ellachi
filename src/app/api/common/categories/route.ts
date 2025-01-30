/// get_all_categories
//"http://localhost:3000/api/common/categories"

import connectDB from "@/lib/db";
import Category from "@/models/Category";

import {  NextResponse } from "next/server";

export async function GET(){
    try{
      connectDB() 
      const  categories =await Category.find();
       if(categories){
        return  NextResponse.json({success:true, status:200, data:categories})
       }else{
        return NextResponse.json({success:false, status:401,message:"No Category founded"})
       }
    }catch(err){
        
        NextResponse.json({success:false, status:402,message:"Someting is wrong!" , err:err.message})
    }
}