const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const CourseModel = mongoose.model("Course");

router.get("/add",(req,res)=>{
    res.render("add-course")
    })

router.post("/add",(req,res)=>{
   var course = new CourseModel();
   course.courseName =req.body.courseName;
   course.courseDuration =req.body.courseDuration;
   course.courseFees = req.body.courseFees;
   course.courseId = Math.ceil(Math.random()*100);
   course.save((err,docs)=>{
    if(!err){
        //console.log(docs)
        //res.send("course controller"); 
        //res.render("list",{data:docs}); 
        res.redirect("/course/list");
        //res.json({message:"successfull",status:"ok"})
    }
    else{
        res.send("error occured");
    }
})
    
})

router.get("/list",(req,res)=>{
   // var course = new CourseModel();
   // course.courseName ="nodejs";y
   // course.courseId = "2";
   // course.save();

    CourseModel.find((err,docs)=>{
    if(!err){
        //console.log(docs)
        //res.send("course controller"); 
        res.render("list",{data:docs}); 
    }
    else{
        res.send(err);
    }
})
    
})
module.exports=router;