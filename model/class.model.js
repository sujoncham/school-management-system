const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    classname:{
        type:String,
        default: ""
    },

}, {
    timestamps: true,
});


// create model

const StudentClass = new mongoose.model("class", classSchema);

module.exports = StudentClass;