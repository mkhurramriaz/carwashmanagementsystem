const mongoose=require('mongoose');
const connectiontoDb=async()=>{
    try {
        const con=await mongoose.connect(process.env.MONGO_URI);
        console.log("Db connected",con.connection.host)
    } catch (error) {
        console.error("DB connection failed",error.message);
        process.exit(1);
        
    }
};
module.exports=connectiontoDb;