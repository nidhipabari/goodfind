import express from "express"
import cors from "cors"
import mongoose from "mongoose"

import {userRouter} from './routes/users.js'



const app= express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter)



mongoose.connect("mongodb+srv://nidhipabari2003:nidhi123@goodfind.8hwcey0.mongodb.net/?retryWrites=true&w=majority")

app.listen(3001, ()=>console.log("server has started"))