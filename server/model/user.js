import { Schema , model } from "mongoose";

const userSchema = new Schema({
    name:{
        type: 'string',
        default:"_"
    },
    email:{
        type: 'string',
        required: true,
        unique: true,
        required: true
    },
    password:{
        type: 'string',
        default:0,
    },
    mobile:{
    type:'String',
    default:0,
    required: true,
    unique: true
    },
    address:{
        type: 'string',
        default :0,
    },
    gender:{
    type :'string',
    default:"Prefer not to say"
    },
})

const User = model("User", userSchema);

export default User;