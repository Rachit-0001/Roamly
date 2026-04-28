const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing =require(".../models/listing.js");

const Mongo_URL="mongodb://127.0.0.1:27017/wanderlust";
app.get("/",(req,res)=>{
    res.send("Hi");
});

app.listen(3000,()=>{
    console.log("Server is running");
});