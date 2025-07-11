import express from "express";
import authRoutes from "./src/routes/auth.route.js";
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from "./src/lib/db.js";
import cookieParser from "cookie-parser";
import messageRoutes from './src/routes/message.route.js';
import { app, server } from "./src/lib/socket.js";

dotenv.config();


const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    "origin":"https://chatrise.netlify.app",
    credentials: true
}))

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


server.listen(PORT, () =>{
    console.log("Server is running on PORT:" + PORT);
    connectDB()
});
