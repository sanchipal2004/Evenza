import mongoose from "mongoose";

 
const connectdb= async()=>{
    try{
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongodb connected!: ${connectionInstance.connection.host}`);

    }catch(err){
        console.log("mongodb connection failed!",err);
        process.exit(1)
    }
}
export default connectdb