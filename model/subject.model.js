const mongoose = require("mongoose");


const subjectsSchema = new mongoose.Schema({
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

const Subjects = new mongoose.model("subject", subjectsSchema);

module.exports = Subjects;