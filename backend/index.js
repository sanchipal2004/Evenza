import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import connectdb from  './config/db.js'
import authRoutes from "./routes/authRoutes.js"
import eventRoutes from "./routes/eventRoutes.js"
import registrationRoutes from "./routes/registrationRoutes.js"
dotenv.config()

const app = express() 
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin: '*',  
  credentials: true
}));
app.use(cookieParser());


app.use("/api/auth",authRoutes)
app.use("/api/events",eventRoutes)
app.use("/api/register",registrationRoutes)
app.use("/uploads", express.static("uploads"));

connectdb()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server running on port${process.env.PORT}`);
    });
})
.catch((error)=>{
console.log("server faied!",error);
process.exit(1)
});
