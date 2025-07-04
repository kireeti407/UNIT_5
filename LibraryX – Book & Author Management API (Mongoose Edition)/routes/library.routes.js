
const {
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
}=require('../controllers/library.controller')
const express=require("express")

const LibraryRouter=express.Router()

//Author
LibraryRouter.get("/authors",get_author)

LibraryRouter.get("/author/:id",get_authorbyid)

LibraryRouter.post("/add-author",add_author)

LibraryRouter.put("/up-author/:id",update_authorbyid)

LibraryRouter.delete("/de-author/:id",delete_authorbyid)

//Book
LibraryRouter.get("/books",get_books)

LibraryRouter.get("/book/:id",get_booksbyid)

LibraryRouter.post("/add-book",add_book)

LibraryRouter.put("/up-book/:id",update_bookbyid)

LibraryRouter.delete("/de-book/:id",delete_bookbyid)

//Book–Author Relationship Routes

LibraryRouter.get("booksby/:id",get_authorId)

module.exports=LibraryRouter