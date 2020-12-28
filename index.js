const connection = require("./model")
const express = require("express");
const path = require('path');
const CourseController = require('./controllers/courses');
const handlebars = require("handlebars");
const expressHandlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const application =express();
application.use(express.json());
application.use(express.static('public'));
application.use(bodyparser.urlencoded({
    extended:true
}));
application.get("/",(req , res)=>{
    //res.send('<h1>hello world<h1>');
    res.render("index",{});
});
application.use("/course", CourseController);
application.set('views',path.join(__dirname,"/views/layouts/"));
application.engine("hbs",expressHandlebars({
   extname:"hbs",
   defaultLayout:"mainlayout",
   layoutsDir: __dirname+"/views/layouts/" ,
   handlebars: allowInsecurePrototypeAccess(handlebars)
}));
application.set("view engine", "hbs")
application.listen("3000", ()=>{
    console.log("server started");
});