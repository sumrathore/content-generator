// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

const mongoose = require("mongoose");
const { DB_NAME } = require("../constants.js");




const connectDB=async () =>{
    try{ 
        console.log(`${process.env.MONGODB_URI} database is connecting...`);
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected:",${connectionInstance.connection.host}`);
   }catch(err){
      console.log("ERROR: ",err)
      throw err
   }
}
module.exports = connectDB;
