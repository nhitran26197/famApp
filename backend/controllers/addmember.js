const Member = require("../models/member");
const addMember = (req, res) => {
  let request = req.body;
  node_member_id = request.member_id;
  let member_id;
  let is_exist = false;
  do {
    member_id = Math.floor(Math.random() * 1000); // a random number from 0 to 999
    Member.findOne({ member_id: member_id }).then((check) => {
      if (check != null) {
        console.log("member_id already exits");
        is_exist = true;
      }
    });
  } while (is_exist);

  const new_member = new Member({
    member_id: member_id,
    name: request.name,
    age: request.age,
    picture: request.picture,
    account: request.account,
  });
  new_member
    .save()
    .then(() => {
      console.log("new member is saved");
      if (request.relationship == "parent") {
        parent();
      } else if (request.relationship == "children") {
        children();
      } else if (request.relationship == "sibling") {
        sibling();
      } else {
        spouse();
      }
    })
    .catch((e) => {
      console.log("new member was not saved");
      console.log(e);
    });

  const parent = () => {
    //update existing relatioship with new parent
    let parent = [];
    Member.findOne({ member_id: node_member_id })
      .then((result) => {
        parent = result.relationship.parent.slice();
        console.log(parent.length);
        return parent;
      })
      .then(() => {
        if (parent.length != 0) {
          console.log("helloo");
          for (let i = 0; i < parent.length; i++) {
            Member.findOneAndUpdate(
              { member_id: parent[i] },
              { $push: { "relationship.spouse": member_id } },
              { new: true }
            )
              .then((updatedMember) => {
                console.log(updatedMember);
              })
              .catch((err) => console.error(err));
            Member.findOneAndUpdate(
              { member_id: member_id },
              { $push: { "relationship.spouse": parent[i] } },
              { new: true }
            )
              .then((updatedMember) => {
                console.log(updatedMember);
              })
              .catch((err) => console.error(err));
          }
        }
      });

    let sibling = [];
    Member.findOne({ member_id: node_member_id })
      .then((result) => {
        sibling = result.relationship.sibling.slice();
        console.log(sibling);
        return sibling;
      })
      .then(() => {
        if (sibling.length != 0) {
          for (let i = 0; i < sibling.length; i++) {
            Member.findOneAndUpdate(
              { member_id: sibling[i] },
              { $push: { "relationship.parent": member_id } },
              { new: true }
            )
              .then((updatedMember) => {
                console.log(updatedMember);
              })
              .catch((err) => console.error(err));
            Member.findOneAndUpdate(
              { member_id: member_id },
              { $push: { "relationship.children": sibling[i] } },
              { new: true }
            )
              .then((updatedMember) => {
                console.log(updatedMember);
              })
              .catch((err) => console.error(err));
          }
        }
      });

    //update parent in child data
    Member.findOneAndUpdate(
      { member_id: node_member_id },
      { $push: { "relationship.parent": member_id } },
      { new: true }
    )
      .then((updatedMember) => {
        console.log(updatedMember);
      })
      .catch((err) => console.error(err));

    //update child in the parent data
    Member.findOneAndUpdate(
      { member_id: member_id },
      { $push: { "relationship.children": node_member_id } },
      { new: true }
    )
      .then((updatedMember) => {
        console.log(updatedMember);
      })
      .catch((err) => console.error(err));

    //res.send("add member");
  };

  const children = () => {
    //update existing relatioship with new parent
    let spouse = [];
    Member.findOne({ member_id: node_member_id })
      .then((result) => {
        spouse = result.relationship.spouse.slice();
        console.log(spouse.length);
        return spouse;
      })
      .then(() => {
        if (spouse.length != 0) {
          console.log("helloo");
          for (let i = 0; i < spouse.length; i++) {
            Member.findOneAndUpdate(
              { member_id: spouse[i] },
              { $push: { "relationship.children": member_id } },
              { new: true }
            )
              .then((updatedMember) => {
                console.log(updatedMember);
              })
              .catch((err) => console.error(err));
            Member.findOneAndUpdate(
              { member_id: member_id },
              { $push: { "relationship.parent": spouse[i] } },
              { new: true }
            )
              .then((updatedMember) => {
                console.log(updatedMember);
              })
              .catch((err) => console.error(err));
          }
        }
      });

    let children = [];
    Member.findOne({ member_id: node_member_id })
      .then((result) => {
        children = result.relationship.children.slice();
        console.log(children);
        return children;
      })
      .then(() => {
        if (children.length != 0) {
          for (let i = 0; i < children.length; i++) {
            Member.findOneAndUpdate(
              { member_id: children[i] },
              { $push: { "relationship.sibling": member_id } },
              { new: true }
            )
              .then((updatedMember) => {
                console.log(updatedMember);
              })
              .catch((err) => console.error(err));
            Member.findOneAndUpdate(
              { member_id: member_id },
              { $push: { "relationship.sibling": children[i] } },
              { new: true }
            )
              .then((updatedMember) => {
                console.log(updatedMember);
              })
              .catch((err) => console.error(err));
          }
        }
      });

    //update parent in child data
    Member.findOneAndUpdate(
      { member_id: node_member_id },
      { $push: { "relationship.children": member_id } },
      { new: true }
    )
      .then((updatedMember) => {
        console.log(updatedMember);
      })
      .catch((err) => console.error(err));

    //update child in the parent data
    Member.findOneAndUpdate(
      { member_id: member_id },
      { $push: { "relationship.parent": node_member_id } },
      { new: true }
    )
      .then((updatedMember) => {
        console.log(updatedMember);
      })
      .catch((err) => console.error(err));

    //res.send("add member");
  };

  const sibling = () => {
    //update existing relatioship with new parent
    let parent = [];
    Member.findOne({ member_id: node_member_id })
      .then((result) => {
        parent = result.relationship.parent.slice();
        console.log(parent.length);
        return parent;
      })
      .then(() => {
        if (parent.length != 0) {
          console.log("helloo");
          for (let i = 0; i < parent.length; i++) {
            Member.findOneAndUpdate(
              { member_id: parent[i] },
              { $push: { "relationship.children": member_id } },
              { new: true }
            )
              .then((updatedMember) => {
                console.log(updatedMember);
              })
              .catch((err) => console.error(err));
            Member.findOneAndUpdate(
              { member_id: member_id },
              { $push: { "relationship.parent": parent[i] } },
              { new: true }
            )
              .then((updatedMember) => {
                console.log(updatedMember);
              })
              .catch((err) => console.error(err));
          }
        }
      });

    let sibling = [];
    Member.findOne({ member_id: node_member_id })
      .then((result) => {
        sibling = result.relationship.sibling.slice();
        console.log(sibling);
        return sibling;
      })
      .then(() => {
        if (sibling.length != 0) {
          for (let i = 0; i < sibling.length; i++) {
            Member.findOneAndUpdate(
              { member_id: sibling[i] },
              { $push: { "relationship.sibling": member_id } },
              { new: true }
            )
              .then((updatedMember) => {
                console.log(updatedMember);
              })
              .catch((err) => console.error(err));
            Member.findOneAndUpdate(
              { member_id: member_id },
              { $push: { "relationship.sibling": sibling[i] } },
              { new: true }
            )
              .then((updatedMember) => {
                console.log(updatedMember);
              })
              .catch((err) => console.error(err));
          }
        }
      });

    //update parent in child data
    Member.findOneAndUpdate(
      { member_id: node_member_id },
      { $push: { "relationship.sibling": member_id } },
      { new: true }
    )
      .then((updatedMember) => {
        console.log(updatedMember);
      })
      .catch((err) => console.error(err));

    //update child in the parent data
    Member.findOneAndUpdate(
      { member_id: member_id },
      { $push: { "relationship.sibling": node_member_id } },
      { new: true }
    )
      .then((updatedMember) => {
        console.log(updatedMember);
      })
      .catch((err) => console.error(err));
  };

  const spouse = () => {
    //update existing relatioship with new parent
    let children = [];
    Member.findOne({ member_id: node_member_id })
      .then((result) => {
        children = result.relationship.children.slice();
        console.log(children.length);
        return children;
      })
      .then(() => {
        if (children.length != 0) {
          console.log("helloo");
          for (let i = 0; i < children.length; i++) {
            Member.findOneAndUpdate(
              { member_id: children[i] },
              { $push: { "relationship.parent": member_id } },
              { new: true }
            )
              .then((updatedMember) => {
                console.log(updatedMember);
              })
              .catch((err) => console.error(err));
            Member.findOneAndUpdate(
              { member_id: member_id },
              { $push: { "relationship.children": children[i] } },
              { new: true }
            )
              .then((updatedMember) => {
                console.log(updatedMember);
              })
              .catch((err) => console.error(err));
          }
        }
      });

    //update parent in child data
    Member.findOneAndUpdate(
      { member_id: node_member_id },
      { $push: { "relationship.spouse": member_id } },
      { new: true }
    )
      .then((updatedMember) => {
        console.log(updatedMember);
      })
      .catch((err) => console.error(err));

    //update child in the parent data
    Member.findOneAndUpdate(
      { member_id: member_id },
      { $push: { "relationship.spouse": node_member_id } },
      { new: true }
    )
      .then((updatedMember) => {
        console.log(updatedMember);
      })
      .catch((err) => console.error(err));
  };
  res.send("add member");
};

module.exports = addMember;
