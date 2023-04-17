const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  bucket_list: String,
  post: [],
  member_id: {
    type: Number,
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
