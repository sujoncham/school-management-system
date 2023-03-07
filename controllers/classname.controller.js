const StudentClass = require("../model/class.model");


// user register
exports.addClassname = async(req,res)=>{
    console.log(req.body);
    const {classname} = req.body;

    if(!classname){
        res.status(401).json({status:401,message:"fill all the data"})
    }

    try {
        const userdata = new StudentClass({
            classname:classname,
        });

        const finaldata = await userdata.save();
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
exports.getClassname = async(req,res)=>{
    try {
        const getUser = await StudentClass.find();

        res.status(201).json({
            status:"success",
            message: "data fetch successfull",
            data: getUser,
        })
    } catch (error) {
        res.status(401).json({status:401,error})
    }
};
exports.classnameDetail = async(req,res)=>{
    try {
        const userId = req.params.id;
        const detailData = await StudentClass.findById(userId);

        res.status(201).json({
            status:"success",
            message: "data fetch successfull",
            data: detailData,
        })
    } catch (error) {
        res.status(401).json({status:401,error})
    }
};

// teacher update
exports.classnameUpdate = async(req,res)=>{
     console.log(req.body)
     try {
        const {classname} = req.body;
        const userId = req.params.id;
        const classnameData = await StudentClass.findByIdAndUpdate(userId, {
            classname
        });

        return res.status(200).json({
            status: "success",
            message: "update teacher by id successfully",
            data: classnameData,
        })
    } catch (error) {
        console.log(error)
    }
};


// delete user data
exports.deleteClassname = async(req,res)=>{

    try {
        const {id} = req.params;

        const dltUser = await StudentClass.findByIdAndDelete({_id:id});

        res.status(201).json({status:201,dltUser});

    } catch (error) {
        res.status(401).json({status:401,error})
    }

};