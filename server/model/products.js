import { Schema , model} from "mongoose";
const  productSchema = new Schema ({
    name:
    {
        type:String,
       required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    brand:{
        type:String,
    },
    Image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
    }
}, {
    timestamps:true,
});

const Product = model("Product", productSchema);

export default Product;