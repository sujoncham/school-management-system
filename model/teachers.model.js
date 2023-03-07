const mongoose = require("mongoose");


const teachersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    joinDate:{
        type:Date,
        required:true
    }
});


// create model

const Teachers = new mongoose.model("teachers",teachersSchema);

module.exports = Teachers;