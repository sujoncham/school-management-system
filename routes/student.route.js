const express = require("express");
const routerStudents = new express.Router();
const multer = require("multer");
const { addStudent, getStudents, studentDetail, getStudentsByClass } = require("../controllers/student.controller");

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


routerStudents.get('/', getStudents)
routerStudents.get('/byClass', getStudentsByClass)
routerStudents.post('/addStudent', upload.single("image"), addStudent)
routerStudents.get('/studentDetail/:id', studentDetail)
// routerTeacher.patch('/teacherUpdate/:id', teacherUpdate)
// routerTeacher.delete('/:id', deleteTeacher)


module.exports = routerStudents;