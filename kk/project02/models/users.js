const mongoose=require("mongoose");
const username=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
            unique:true
        },
        
    },
    {timeStamps:true}
);

const Userl=mongoose.model("Userl",username);

module.export=Userl