const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  member_id:Number,
  name: String,
  age: Number,
  picture: String,
  account: String,
  parent: [Number], // array of member_id
  children: [Number],
  sibling: [Number],
  spouse: [Number],
});

const Member = mongoose.model("Member", memberSchema);
module.exports = Member;
