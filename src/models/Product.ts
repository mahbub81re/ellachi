import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    productName : String,
    productDescription :String ,
    productImage : String ,
    productSlug : String,
    productPrice : Number,
    productDPrice : Number,
    productQuantity : Number,
    productFeatured : Boolean,
    mesurType:{
        type:String,
         default:"p"
    },
    productCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    },

},{timestamps : true});

const Product = mongoose.models.Product  || mongoose.model('Product', ProductSchema);

export default Product;

