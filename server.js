// const express = require("express");

// const app = express();

// const PORT = process.env.PORT || 8090;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const dotenv = require("dotenv");
const express = require("express");

const app = express();

const connectDB = require("./utils/connectDB");
// dotenv.config({
//     path:'.//env'
// })
require('dotenv').config();


connectDB()
.then(() => {
   
   app.listen(process.env.PORT || 8000, ()=>{
      console.log(`server is running on port: ${process.env.PORT}`);
   })
}).catch((err) => {
    console.log("MONGODB connection is failed",err);
});