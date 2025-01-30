// get_all_products
// http://localhost:3000/api/common/products?limit=1
import connectDB from "@/lib/db";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";


export const dynamic = 'force-dynamic'

export async function GET(req:NextRequest) {
    const { searchParams } = new URL(req.url);
    const limit = searchParams.get('limit');
    if(limit){
        try{
    connectDB();
        const products =await Product.find().limit(20).skip(parseInt(limit));
        if(products ){
            if(products.length === 0 ){
                return NextResponse.json({status:200, success  :false , message :"No more products found"});
            }else{
                return NextResponse.json({status:200, success  :true ,  data: products });
            }
        }else{
            return NextResponse.json({status: 204 , success: false, message: 'No product found.' });
        }
       }catch(err){
        console.log(err)
        return NextResponse.json({status : 500 , success: false, message: 'Something went wrong. Please try again!' });
       }
    }
    return NextResponse.json({status : 500 , success: false, message: 'End' });
    
}

