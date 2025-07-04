const mongoose=require('mongoose')

const db=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/evaluation")
        console.log("DB connected....")
    }
    catch(err){
        console.log("error",err)
    }
}

module.exports=db