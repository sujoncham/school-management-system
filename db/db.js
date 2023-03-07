const mongoose = require("mongoose");
require("dotenv").config();

const DB = process.env.DATABASE

const connectDB = async () =>{
try {
    mongoose.set('strictQuery', true);
    
    mongoose.connect(DB,{
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log("DATABASE connected")
} catch (error) {
    console.log("error" + error.message)
}
}

module.exports = connectDB;
    

