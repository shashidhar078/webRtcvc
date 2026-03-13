import express from "express";

import {createServer} from "node:http";

import {Server} from "socket.io";

import cors from "cors";

import mongoose from "mongoose";

const app=express();

app.get("/",(req,res)=>{
    res.json({"hello":"world"});
})

const start=async (req,res)=>{
    app.listen(8000,()=>{
        console.log("App listening on port no 8000");
    })
}

start();