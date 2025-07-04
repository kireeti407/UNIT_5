const mongoose=require("mongoose")

const AuthorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    birthyear:{
        type:String,
    },
    nationality:{
        type:String
    }
})

const Author=mongoose.model("Author",AuthorSchema)

module.exports=Author