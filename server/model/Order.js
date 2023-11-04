import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
    user:{
        type :Schema.Types.ObjectId,
        ref: 'User' 
    },
    product:{
        type :Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity:{
        type:"number",
        default:1
    },
    status:{
        type:"string",
         default:"pending"        
    },
    shipingcharge:{
        type:"number",
        default:0

    },
    address:{
        type:"string",
        required:true

    },
},
{
    timestamps:true,
});

const Order = model ('Order',OrderSchema);
export default Order;