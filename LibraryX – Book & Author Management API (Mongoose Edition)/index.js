const express=require("express")
const db = require("./config/db")
const LibraryRouter=require('./routes/library.routes')

db()

const app=express()

app.use(express.json())

app.use("/library",LibraryRouter)

app.listen(3000,()=>{
    console.log("server running on port 3000")
})