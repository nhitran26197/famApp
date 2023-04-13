const mongoose = require("mongoose");
//const Joi = require("joi");
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
//need to verify that this would work with our current schema and verify how to seperate the post schema from the user schema

/*
const User = mongoose.model("user", userSchema);

const validate = (user) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });
    return schema.validate(user);
};

module.exports = { User, validate };
*/