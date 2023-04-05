const dbConnect = require("./controllers/connectMongoDb");
const User = require("./models/user");
const Member = require("./models/member");
const signUp = require("./controllers/signup");
const login = require("./controllers/login");
const forgotpw = require("./controllers/forgotpw");
dbConnect();

// const user = new User({
//   username: "nhitran",
//   password: "hello123",
//   email: "nhitran26197@gmai.com",
//   member_id: "1",
//   post: {
//     post_id: 1,
//     caption: "first post",
//   },
// });

// const member = new Member({
//   member_id: 2,
//   name: "Two",
//   age: 26,
//   account: "Two",
//   relationship: {
//     parent: [1],
//   },
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
app.post("/signup", signUp);
app.post("/login", login);
app.post("/forgotpw", forgotpw);
