const express = require("express");
const app = express();
app.use(express.json());

const dbConnect = require("./controllers/connectMongoDb");
const User = require("./models/user");
const Member = require("./models/member");
dbConnect();

const addMember = require("./controllers/addmember");
const showTree = require("./controllers/showtree");

// const user = new User({

//   username: "nhitran",
//   password: "hello123",
//   email: "nhitran26197@gmai.com",
//   member_id: "0",
//   post: {
//     post_id: 1,
//     caption: "first post",
//   },
// });

// const member = new Member({
//   member_id: 1,
//   name: "Nhi Tran",
//   age: 26,
//   account: "nhitran",
// });

// user
//   .save()
//   .then(() => {
//     console.log("saved to mongoDB");
//   })
//   .catch((error) => {
//     console.log("not saved ");
//   });

// member
//   .save()
//   .then(() => {
//     console.log("saved to mongoDB");
//   })
//   .catch((error) => {
//     console.log("not saved ");
//   });

app.post("/addmember", addMember);
app.get("/showtree/parent", showTree.parent);
app.get("/showtree/children", showTree.children);
app.get("/showtree/spouse", showTree.spouse);
app.get("/showtree/sibling", showTree.sibling);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`listening to port${PORT}`);
});
