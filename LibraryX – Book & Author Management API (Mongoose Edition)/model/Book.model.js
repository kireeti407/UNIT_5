const mongoose=require("mongoose")

const BookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Author",
        required:true
    },
    year:{
        type:String,
    },
    genre:{
        typ:String,
    },
    available:{
        type:Boolean,
        default:true
    }
})

const Book=mongoose.model("Book",BookSchema)

module.exports=Book