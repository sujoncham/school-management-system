const StudentClass = require("../model/class.model");
const Students = require("../model/student.model");

exports.addStudent = async(req,res)=>{

    console.log("filename", req.file.filename)
    console.log(req.body);
    const {classId} = req.body;
    const classById = await StudentClass.findById(classId)
  
    
    const userdata = new Students({
        fullname:req.body.fullname,
        father:req.body.father,
        mother:req.body.mother,
        gender:req.body.gender,
        address:req.body.address,
        birthDate:req.body.birthDate,
        phone:req.body.phone,
        studentId:req.body.studentId,
        group:req.body.group,
        section:req.body.section,
        image:req.file.filename,
        description:req.body.description,
        joinDate:req.body.joinDate,
        classes:classById._id,
    });

    try {
        // const session = await mongoose.startSession();
        // session.startTransaction();
        // await userdata.save({session});
        await userdata.save();
        // existUser.students.push(userdata);
        // await existUser.save({session});
        // await session.commitTransaction();
    } catch (error) {
        return res.send({
            status: "failed",
            message: "Student is not created",
            error: error,
        })
    }


    res.status(201).json({
        status: "success",
        message: "data post successfully",
        data:userdata,
    });
};

exports.getStudents = async(req,res)=>{
    try {
        const getUser = await Students.find().populate('classes');

        res.status(201).json({
            status:"success",
            message: "data fetch successfull",
            data: getUser,
        })
    } catch (error) {
        res.status(401).json({status:401,error})
    }
};

exports.getStudentsByClass = async(req,res)=>{
    try {
        const getUser = await Students.find().populate('classes');

        res.status(201).json({
            status:"success",
            message: "data fetch successfull",
            data: getUser,
        })
    } catch (error) {
        res.status(401).json({status:401,error})
    }
};

exports.studentDetail = async(req,res)=>{
    try {
        const userId = req.params.id;
        const teacher = await Students.findById(userId).populate('classes');

        res.status(201).json({
            status:"success",
            message: "data fetch successfull",
            data: teacher,
        })
    } catch (error) {
        res.status(401).json({status:401,error})
    }
};
