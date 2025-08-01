// import express from 'express';
import 'dotenv/config'
import connectDB from './db/index.js';

// const app = express();
// const port = process.env.PORT || 8000;
connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
    
})

// dotenv.config({
//     path: './env'
// })

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(port, () => {
//     console.log(`Server is running on PORT: ${port}`);
    
// })