const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pic: String,
  googleId: String,
  secret: String,
  panier: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model("User", userSchema);
