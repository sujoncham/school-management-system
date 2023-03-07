const express = require("express");
const { getClassname, addClassname, classnameDetail, classnameUpdate, deleteClassname } = require("../controllers/classname.controller");
const routerClassname = new express.Router();




routerClassname.get('/', getClassname)
routerClassname.post('/addClassname', addClassname)
routerClassname.get('/classnameDetail/:id', classnameDetail)
routerClassname.patch('/classnameUpdate/:id', classnameUpdate)
routerClassname.delete('/:id', deleteClassname)


module.exports = routerClassname;