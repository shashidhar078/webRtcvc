import {User} from "../models/userModel.js"
import bcrypt from "bcrypt"
import httpStatus from "http-status"
import crypto from "crypto"

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Please provide username and password" });
    }

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res
              .status(httpStatus.NOT_FOUND)
              .json({ message: "User does not exist" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (isPasswordCorrect) {
            const token = crypto.randomBytes(20).toString("hex");
            user.token = token;
            await user.save();

            return res.status(httpStatus.OK).json({ token });
        } else {
            return res
              .status(httpStatus.UNAUTHORIZED)
              .json({ message: "Invalid username or password" });
        }
    } catch (e) {
        return res.status(500).json({ message: `Something went wrong: ${e.message}` });
    }
};


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
        return res.json({message:`something went wrong${e}`})
    }
}

export {login,register}