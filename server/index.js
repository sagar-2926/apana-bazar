import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product  from './model/products.js';
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

  //get / products

  app.get('/products',async (req, res) => {
     const products = await Product.find();
    
     res.json({
      success:true,
      data:products,
      message: 'Product fetched successfully'
     });


  });

  //post product

  app.post('/product',async (req, res) => {
    const {name,description,price,category,brand,Image} = req.body;
    const product = new Product({
      name: name,
      description: description,
      price:price,
      category: category,
      brand: brand,
      Image: Image
    });
    try{
      const savedProduct = await product.save();
    
     res.json({
      success: true,
      data:savedProduct,
      message:"Product saved successfully"
     });
    }
    catch(e) {
      res.json({
        success: false,
        message: e.message
      });
    }
  });

  //get / product/:id
   app.get("/product/:_id",async (req,res) =>{
    const {_id} = req.params;

    const product = await Product.findById({_id: _id});
    res.json({
      success: true,
      data: product,
      message: "Product fetch successfully"
    });
   });

  //PUT / product/:id
  app.put('/product/:_id', async (req, res)=>{
    const {_id} = req.params;
    const {name,description,price,Image,category,brand } = req.body;

    await Product.updateOne({_id: _id},{$set:{
      name: name,
      description: description,
      price: price,
      Image: Image,
      category: category,
      brand: brand,
  }});
const updatedProduct = await Product.findById(_id);

 res.json({
  success:true,
  data:updatedProduct,
  message:"Product updated successfully"
 });

  });

  //delet/ product/:id
  app.delete('/product/:_id',async (req, res)=>{
 const {_id} = req.params;
 await Product.deleteOne({_id:_id});

 res.json({
  success:true, 
  message: "Product deleted successfully"
  })
  });

  // GET / productS/search?query
  app.get('/products/search', async (req, res) => {
    const {q}=req.query;
   const products = await Product.find({name: {$regex: q,$options:"i"}});
  res.json({
    success:true,
    data:products,
    message:"Product fetched successfully"
  });
  });


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server runing on port:${PORT}`)
    connectDB();

});