const express = require("express");
const routerTeacher = new express.Router();
const multer = require("multer");
const { getTeachers, addTeacher, deleteTeacher, teacherDetail, teacherUpdate } = require("../controllers/teacher.controller");

// img storage path
const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}. ${file.originalname}`)
    }
})


// img filter
const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new Error("only images is allowd"))
    } 
}

const upload = multer({
    storage:imgconfig,
    fileFilter:isImage
});


routerTeacher.get('/', getTeachers)
routerTeacher.post('/addTeacher', upload.single("photo"), addTeacher)
routerTeacher.get('/teacherDetail/:id', teacherDetail)
routerTeacher.patch('/teacherUpdate/:id', teacherUpdate)
routerTeacher.delete('/:id', deleteTeacher)


module.exports = routerTeacher;