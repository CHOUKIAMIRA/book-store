const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image:{
    type:String,
    default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9iBAx9ccmOxl3WxL2Dfs66v14dMyX_fVpA&s"
  } 
 
});

module.exports = mongoose.model("books", bookSchema);