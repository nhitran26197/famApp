const Member = require("../models/member");

const getTree = (req, res) => {
  let arr = [];

  Member.find({})
    .then((result) => {
      console.log(result);
      arr.push(result);
    })
    .then(() => {
      res.json(arr);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
};
module.exports = getTree;
