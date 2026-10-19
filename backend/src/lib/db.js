import mongoose from 'mongoose'

import dns from "node:dns";


dns.setServers(["8.8.8.8", "8.8.4.4"]);

async function connectDB()
{
    try {
        const mongoUri = process.env.MONGO_URI;

        if(!mongoUri){
            throw new Error("Mongo_URI is required!");
        }

        const conn = await mongoose.connect(mongoUri);

        console.log("MongoDB Connected Successfully....");
    } catch (error) {
        console.log(error);
        process.exit(1); // 1 means failed and 0 means success
    }
}

export default connectDB;