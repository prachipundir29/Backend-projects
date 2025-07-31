import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {

    try {
      const connectionInstance = await mongoose.connect
      (`${process.env.MONGODB_URI }/${ DB_NAME}`)
      console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host} \n`);
       
    } catch (error) {
        console.log("MONGODB connection error:", error);
        process.exit(1)
        
    }

//   mongoose.connection.on('connected', () => {
//     console.log("MongoDB connected successfully");    
//   })
//   await mongoose.connect(`${process.env.MONGODB_URI}/videoTube`)
}


export default connectDB;