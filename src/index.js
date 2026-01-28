// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config();

connectDB()

/*
import express from "express";
const app = express();
(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         app.on("error",(error)=>{
            console.log("ERROR:", error);
            throw error
         })
            app.listen(`App is eunning on PORT ${process.env.PORT || 8000}`)
    } catch (error) {
       console.error("ERROR:", error)
       throw err 
    }
})()

*/




// const app = express();
// const port = process.env.PORT || 8000;
// connectDB()
// .then(() =>{
//     app.listen(process.env.PORT || 8000, () => {
//         console.log(`Server is running at port : ${process.env.PORT}`);
        
//     })
// })
// .catch((err) => {
//     console.log("MONGO db connection failed !!!", err);
    
// })

// dotenv.config({
//     path: './env'
// })

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(port, () => {
//     console.log(`Server is running on PORT: ${port}`);
    
// })