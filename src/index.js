// require("dotenv").config({path: "./.env"});
import dotenv from "dotenv";



import mongoose from "mongoose";   
import express from "express";
import connectDB from "./db/index.js";
const app = express(); 

dotenv.config({ path: "./.env" });

connectDB()
.then(() =>{ 
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("Error connecting to MongoDB:", err);
})
























































//  IIFE (Immediately Invoked Function Expression)
// ( async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("MongoDB connection error");
//             throw error 
//         }) 

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         }   )
//         console.log("MongoDB connected successfully");
//     }catch(error){
//         console.error("ERROR: ", error);
//         throw error
//     }
// } )()