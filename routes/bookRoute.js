const express=require("express")
const { addBook, getBook } = require("../controller/bookController")
const { paiment } = require("../controller/paimentController")



const bookRouter=express.Router()

bookRouter.post("/add",addBook)
bookRouter.get("/get",getBook)
bookRouter.post("/create-checkout-session",paiment)
module.exports=bookRouter