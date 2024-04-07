import mongoose from "mongoose";

export const connectDb=()=>{
    mongoose.connect(process.env.MONGO_URI,{dbName:"Trait"})
    .then(()=>{
        console.log(`db is connected` )
    }).catch((err)=>{
        console.log(err)
    })
}