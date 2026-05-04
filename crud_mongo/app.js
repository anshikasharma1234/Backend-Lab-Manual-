const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/my_Db")
  .then(() => console.log("Database connected"))
  .catch(() => console.log("Database connection failed"));
  const newSchema = new mongoose.Schema({
    First_Name:{
        type:String,
        Require:true,
        Unique:true},
    Email:{
        type:String,
        Require:true,
        Unique:true},
    Contact:{
        type:String,
        Require:true},
    },
    {timestamp:true}
);
 
const User = mongoose.model("User", newSchema);
app.post('/user',(req,res)=>{
    
        res.json(user);
    })
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
