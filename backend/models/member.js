const mongoose = require("mongoose");
//const Joi = require("joi");

const memberSchema = new mongoose.Schema({
  member_id: {
    type: Number,
  },
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  picture: {
    type: String,
  },
  account: {
    type: String,
  },
  relationship: {
    parent: [], // array of member_id
    children: [],
    sibling: [],
    spouse: [],
  },
});

const Member = mongoose.model("Member", memberSchema);
module.exports = Member;
