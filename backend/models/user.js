const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  bucket_list: {
    type: String,
  },
  post: [],
  member_id: {
    type: Number,
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
