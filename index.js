import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import postRoute from "./routes/postRoute.js";


const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
    console.log("Succesfully connected to db")
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((error) =>{console.log(error)});
console.log("i am here in index")

app.use("/api/v1/posts",postRoute)


