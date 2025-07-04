
const Book=require('../model/Book.model')

const exist=async(req,res,next)=>{
    try{
        let book=req.body
        console.log(book)
        let data=await Book.find({title:book.title})
        console.log(data)
        if(data.length==0){
            next()
        }
        else{
            res.status(400).send({msg:"already exist"})
        }
    }catch(err){
        console.log(err)
    }
}

module.exports=exist