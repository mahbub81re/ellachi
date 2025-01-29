// delete_a_category
// http://localhost:3000/api/admin/categories/delete_category

import connectDB from "@/lib/db";
import Order from "@/models/Order";
// import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if(!id) return NextResponse.json({status: 400 , success: false, message: 'Please provide category id.' });

    // const token =await getToken({
    //     req,
    //     secret:process.env.NEXTAUTH_SECRET
    // })
    try{
        // if(token?.email==="admin@gmail.com"){
            connectDB();
            const res =  await Order.findByIdAndDelete({_id:id});
            if(res){
                return NextResponse.json({success:true,status:200,data:res})
            }else{
                return NextResponse.json({success:false,status:402,message:"Did not Found Order"})
            }
        // }else{
        //     return NextResponse.json({success:false,status:403,message:"Not Authorized"})
        // }
    }catch(err){
        console.log(err)
        return NextResponse.json({success:false,status:402,message:"Somethig is going wrong!"})
    }
}