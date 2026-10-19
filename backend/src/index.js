import express from "express";
import 'dotenv/config'
import connectDB from "./lib/db.js";
import {clerkMiddleware} from "@clerk/express"
import cors from "express"

const app = express();

const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

async function startServer()
{
    try {
        await connectDB();

        app.listen(PORT, ()=>{
            console.log(`Server is running on PORT: ${PORT}`);
        })
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

// Middlewares
app.use(express.json());
app.use(cors({oigin:FRONTEND_URL, credentials: true}));
app.use(clerkMiddleware());

app.get("/health", (req,res) => {
    res.status(200).json({ ok : true});
})

startServer();