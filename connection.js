const mongoose = require("mongoose");
//const express = require("express");

mongoose.connect("mongodb://localhost:27017/edureka",{ useNewUrlParser: true , useUnifiedTopology: true },(error)=>{
if(!error)
{
    console.log("success");
}
else{
    console.log("error whileconnecting");
}
});