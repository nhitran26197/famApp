const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  member_id: Number,
  name: String,
  age: Number,
  picture: String,
  account: String,
  relationship: {
    parent: [], // array of member_id
    children: [],
    sibling: [],
    spouse: [],
  },
});

const Member = mongoose.model("Member", memberSchema);
module.exports = Member;
