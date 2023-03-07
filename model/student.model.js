const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
    fullname: {
        type:String,
        required:true
    },
    studentId: {
        type:String,
        required:true
    },
    father: {
        type:String,
        required:true
    },
    mother: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    birthDate: {
        type:String,
        required:true
    },
    phone: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    gender: {
        type:String,
        required:true
    },
    joinDate: {
        type:String,
        required:true
    },
    group: {
        type:String,
        required:true
    },
    section: {
        type:String,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    classes:[{
        type: mongoose.Types.ObjectId,
        ref: 'class',
        required:true
    }],
}, {
    timestamps: true,
});


// create model

const Students = new mongoose.model("student", studentsSchema);

module.exports = Students;