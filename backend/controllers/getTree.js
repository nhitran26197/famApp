const Member = require("../models/member");

const getTree = (req, res) => {
  let data = [];

  Member.find({})
    .then((result) => {
      console.log(result);
      //organize the data that <Tree> component needs
      result.map((item) => {
        let obj = {
          "id": item.account,
          "gender": "male",
          "img": item.picture,
          "parents":[],
          "children":[],
          "spouses":[],
          "siblings":[],
        };
        if (item.parents.length > 0) {
          item.parents.map((parent) => {
            obj.parents.push({"id":parent.id,"type":"blood"});
          })
        }
        if (item.children.length >0) {
          item.children.map((child) => {
            obj.children.push({"id":child.id,"type":"blood"});
          })
        }
        if (item.spouses.length > 0) {
          item.spouses.map((spouse) => {
            obj.spouses.push({"id":spouse.id,"type":"blood"});
          })
        }
        if (item.siblings.length > 0) {
          console.log(item.siblings.length)
          item.siblings.map((sibling) => {
            obj.siblings.push({"id":sibling.id,"type":"blood"});
          })
        }
        data.push(obj);
      })
    })
    .then(() => {
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
};


module.exports = getTree;
