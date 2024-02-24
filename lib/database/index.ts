import mongoose from 'mongoose'

console.log("sas")
const MONGODB_URI= process.env.MONGODB_URI
console.log(MONGODB_URI,"mb")

let cached = (global as any).mongoose || { conn: null, promise: null }

export const connectToDatabase = async()=>{
    if(cached.conn) return cached.conn 

    if(!MONGODB_URI)throw new Error("MONGODB_URO is missing")

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI,{
        dbName: "evently",
        bufferCommands:false,
    })

    cached.conn = await cached.promise

    return cached.conn
}