import {User} from "./models/userModel.js"
import bcrypt from "bcrypt"
import httpStatus from "http-status"

const register=async (req,res)=>{
    const {name,username,password}=req.body;


    try{
        const existingUser=await User.findOne({username})
        if(existingUser)
        {
            return res.status(httpStatus.FOUND).json({message:"User already exists"})
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=new User({
            name:name,
            username:username,
            password:hashedPassword
        })
        await newUser.save();
        return res.status(httpStatus.CREATED).json({message:"user registered"})
    }
    catch(e){
        return res.json({message:`something went wrong`})
    }
}

export {register}