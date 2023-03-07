const Teachers = require("../model/teachers.model");

// user register
exports.addTeacher = async(req,res)=>{

    const {filename} = req.file;
    // console.log(filename)

    const {fullname, position, subject, description, joinDate} = req.body;
    // console.log(req.body);

    if(!fullname || !filename){
        res.status(401).json({status:401,message:"fill all the data"})
    }

    try {

        const userdata = new Teachers({
            name:fullname,
            position:position,
            subject:subject,
            img:filename,
            description:description,
            joinDate:joinDate,
        });

        const finaldata = await userdata.save();
        console.log("Get Data", finaldata);
        res.status(201).json({
            status: "success",
            message: "data post successfully",
            data:finaldata,
        });

    } catch (error) {
        res.status(401).json({status:401,error})
    }
};


// user data get
exports.getTeachers = async(req,res)=>{
    try {
        const getUser = await Teachers.find();

        res.status(201).json({
            status:"success",
            message: "data fetch successfull",
            data: getUser,
        })
    } catch (error) {
        res.status(401).json({status:401,error})
    }
};
exports.teacherDetail = async(req,res)=>{
    try {
        const userId = req.params.id;
        const teacher = await Teachers.findById(userId);

        res.status(201).json({
            status:"success",
            message: "data fetch successfull",
            data: teacher,
        })
    } catch (error) {
        res.status(401).json({status:401,error})
    }
};

// teacher update
exports.teacherUpdate = async(req,res)=>{
     console.log(req.body)
     try {
        const {name, subject, description, address, position, phone, joinDate} = req.body;
        const userId = req.params.id;
        const teacher = await Teachers.findByIdAndUpdate(userId, {
            name, subject, description, address, position, phone, joinDate
        });

        return res.status(200).json({
            status: "success",
            message: "update teacher by id successfully",
            data: teacher,
        })
    } catch (error) {
        console.log(error)
    }
};


// delete user data
exports.deleteTeacher = async(req,res)=>{

    try {
        const {id} = req.params;

        const dltUser = await Teachers.findByIdAndDelete({_id:id});

        res.status(201).json({status:201,dltUser});

    } catch (error) {
        res.status(401).json({status:401,error})
    }

};