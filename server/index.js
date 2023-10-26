import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import User from './model/user.js';

const app = express();
app.use(express.json());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
   
  if (conn){
    console.log(`MongoDB connected`);
  }
};

  //POST / Signup

  app.post('/signup', async (req, res) => {
     const {name,
         password,
         email,
         mobile,
         address,
         gender 
        } = req.body;
        const user = new User({name:name,
             password:password, 
             email:email, 
             mobile:mobile, 
             address:address, 
             gender:gender
             });

             try{
                const savedUser = await user.save();

             res.json({
                success: true,
                data: savedUser,
                message: 'signup successfully '
             });
             }
             catch(e){
                res.json({
                    success: false,
                    message: e.message
                 })
             }
     });

  //POST/ LOGIN

  app.post('/login', async (req, res) => {
    const {email, password} = req.body ;
    if (!email || !password) { 
        return res.json({
            success:false,
            message:"Please enter your email and password"
        })
    }
  const user = await User.findOne({
     email: email, 
    password: password 
   }).select("name email mobile")
   
   if (user) {
    return res.json({
        success:true,
        data: user,
        message:"login successful"
    });
   } else { 
    return res.json({
        success:false,
        message:"Invalid credentials"
    });
}


  });


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server runing on port:${PORT}`)
    connectDB();

});