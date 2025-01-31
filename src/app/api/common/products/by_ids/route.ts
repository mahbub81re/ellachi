
import connectDB from "@/lib/db";
import Product from "@/models/Product";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const data =await req.json();
    // const token =await getToken({
    //     req,
    //     secret:process.env.NEXTAUTH_SECRET
    // })
    try{
        // if(token?.email===process.env.ADMIN){
            connectDB();
            // Unfinished work
             console.log(data)
            

    if (!data || !Array.isArray(data)) {
        console.log("Invalid Id")
      return NextResponse.json({success:false,status:402,message:"Invalid Id"})
    }

    const objectIds = data.map((id) => new mongoose.Types.ObjectId(id));

    const products = await Product.find({ _id: { $in: objectIds } });
          if(products){
            return NextResponse.json({success:true,status:400,data:products})
          }
    }catch(err){
        return NextResponse.json({success:false,status:402,err:err,message:"Something is wrong!"})
    }
}