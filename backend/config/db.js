import mongoose from "mongoose"

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://AYVORA:ayvora12345@cluster0.hoxtgp2.mongodb.net/Food-delivery').then(()=>console.log("DB Connected"));

}