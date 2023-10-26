import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
   
  if (conn){
    console.log(`MongoDB connected`);
  }

};

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server runing on port:${PORT}`)
    connectDB();

});