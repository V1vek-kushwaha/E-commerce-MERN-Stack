import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema(
    {
        _id:{
            type : String,
            require: [true ,"Please enter ID"]
        },
        name:{
            type : String,
            require: [true ,"Please enter Name"]
        },
        email:{
            type : String,
            require: [true ,"Please enter Email"],
            unique:[true,"Email already Exist"],
            validate:validator.default.isEmail,
        },
        photo:{
            type : String,
            require: [true ,"Please add Photo"]
        },
        role:{
            type : String,
            enum: ["admin","user"],
            default:"user"
        },
        gender:{
            type : String,
            enum: ["male" ,"female"],
            require:[true,"Please enter Gender"]
        },
        dob:{
            type : Date,
            require: [true ,"Please enter Date"]
        }
    }
);
schema.virtual("age").get(function(){
    // const today = new Date();
    // const dob = this.dob;
    // let age = today.getFullYear() - dob.getFullYear();
    // if(today.getMonth() < dob.getMonth() || today.getMonth() === today.getMonth() )
})
export const User = mongoose.model("User",schema)