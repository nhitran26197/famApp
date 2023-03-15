const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  post_id: {
    type: Number,
  },
  caption: {
    type: String,
  },
  picture: {
    type: String,
  },
  location_long: {
    type: Number,
  },
  location_lat: {
    type: Number,
  },
  type: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

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
  post: [postSchema],
  member_id: {
    type: Number,
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
