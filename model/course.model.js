const mongoose = require("mongoose");
var CourseSchema = new mongoose.Schema({
courseName:{
    type:String,
    required:"Required"
},
courseId:{
    type:String   
},
courseFees:{
    type:String   
},
courseDuration:{
    type:String   
}
});
mongoose.model("Course",CourseSchema)