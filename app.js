require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const routerTeacher = require("./routes/teacher.route");
const routerClassname = require("./routes/classname.route");
const routerStudents = require("./routes/student.route");
const connectDB = require("./db/db");


const port =  process.env.PORT || 5000;

connectDB()
app.use(express.json());
app.use(cors())
app.use(express.static('./uploads'));



app.use("/api/teachers", routerTeacher);
app.use("/api/classname", routerClassname);
app.use("/api/students", routerStudents);

app.get('/', (req, res)=>{
    res.send(`server start at port no ${port}`)
})

app.listen(port,()=>{
    console.log(`server start at port no ${port}`)
})