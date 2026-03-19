import express from "express";

import {createServer} from "node:http";

import {Server} from "socket.io";

import cors from "cors";

import mongoose from "mongoose";
import {connectToServer} from "./controllers/socketManager.js"
import userRoutes from "./routes/userRoutes.js"
const app=express();
const server=createServer(app);
const socketio=connectToServer(server);

app.set("port",(process.env.PORT||8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));
app.use("/api/v1/users",userRoutes);
app.get("/",(req,res)=>{
    res.json({"hello":"world"});
})

const start=async (req,res)=>{
    const connectDb=await mongoose.connect("mongodb+srv://nagunurishashidhar_db_user:Shashi%4078@cluster0.htbwqwz.mongodb.net/webvideo?appName=Cluster0")
    server.listen(app.get("port"),()=>{
        console.log("App listening on port no 8000");
    })
}

start();