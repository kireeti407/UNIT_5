
const Book=require("../model/Book.model")
const Author=require("../model/Author.model")

const get_author=async(req,res)=>{
    try{
        let data=await Author.find()
        res.status(200).json(data)
    }
    catch(err){
        res.status(400).send({msg:"error"})
    }
}

const get_authorbyid=async(req,res)=>{
    try{
        let id=req.params.id
        let data=await Author.findById(id)
        res.status(200).json(data)
    }
    catch(err){
        res.status(400).send({msg:"error"})
    }
}

const add_author=async(req,res)=>{
    try{
        let author=req.body
        let data=await Author.insertOne(author)
        res.status(200).json(data)
    }
    catch(err){
        res.status(400).send({msg:"error"})
    }
}

const update_authorbyid=async(req,res)=>{
    try{
        let id=req.params.id
        let upd=req.body
        let data=await Author.findByIdAndUpdate(id,upd,{new:true})
        res.status(200).json(data)
    }
    catch(err){
        res.status(400).send({msg:"error"})
    }
}

const delete_authorbyid=async(req,res)=>{
    try{
        let id=req.params.id
        let upd=req.body
        let data=await Author.findByIdAndDelete(id)
        res.status(200).json({msg:"deleted sucsessfully"})
    }
    catch(err){
        res.status(400).send({msg:"error"})
    }
}

const get_books=async(req,res)=>{
    try{
        let data=await Book.find()
        res.status(200).json(data)
    }
    catch(err){
        res.status(400).send({msg:"error"})
    }
}

const get_booksbyid=async(req,res)=>{
    try{
        let id=req.params.id
        let data=await Book.findById(id)
        res.status(200).json(data)
    }
    catch(err){
        res.status(400).send({msg:"error"})
    }
}

const add_book=async(req,res)=>{
    try{
        let bd=req.body
        let data=await Book.insertOne(bd)
        res.status(200).json(data)
    }
    catch(err){
        res.status(400).send({msg:"error"})
    }
}

const update_bookbyid=async(req,res)=>{
    try{
        let id=req.params.id
        let upd=req.body
        let data=await Book.findByIdAndUpdate(id,upd,{new:true})
        res.status(200).json(data)
    }
    catch(err){
        res.status(400).send({msg:"error"})
    }
}

const delete_bookbyid=async(req,res)=>{
    try{
        let id=req.params.id
        let data=await Book.findByIdAndDelete(id)
        res.status(200).json({msg:"deleted sucsessfully"})
    }
    catch(err){
        res.status(400).send({msg:"error"})
    }
}

const get_authorId=async(req,res)=>{
    try{
        let id=req.params.id
        let data=await Book.find({$match:{author:id}})
        res.status(200).json({msg:"deleted sucsessfully"})
    }
    catch(err){
        res.status(400).send({msg:"error"})
    }
}

module.exports={
    get_author,
    get_authorbyid,
    add_author,
    update_authorbyid,
    delete_authorbyid,
    get_books,
    get_booksbyid,
    add_book,
    update_bookbyid,
    delete_bookbyid,
    get_authorId
}