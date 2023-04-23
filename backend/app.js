const express = require("express");
const app = express();
const cors = require("cors");
// const AWS = require("aws-sdk");
// const multer = require("multer");
// const multerS3 = require("multer-s3");
app.use(express.json());

const pwReset = require("./controllers/pwReset");
const dbConnect = require("./controllers/connectMongoDb");
const User = require("./models/user");
const Member = require("./models/member");
const changepw = require("./controllers/changepw");
dbConnect();

// const addMember = require("./controllers/addmember");
// const showTree = require("./controllers/showtree");
// const posting = require("./controllers/posting");
const { profilePost, profileGet } = require("./controllers/profile");
// const { travelPost, eventPost } = require("./controllers/feedpage");
// const imageController = require("./controllers/convertURL");
//const getTree = require("./controllers/getTree");
const {login, users} = require("./controllers/login");
const gmaillogin = require("./controllers/gmaillogin");
const signUp = require("./controllers/signup");
const updatePW = require("./controllers/changepw");
//const testing = require("./controllers/testing");

var url = 'mongodb://localhost:3001';
// const s3 = new AWS.S3({
//   accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
// });

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: process.env.AWS_S3_BUCKET_NAME,
//     acl: "public-read",
//     metadata: (req, file, cb) => {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: (req, file, cb) => {
//       cb(null, Date.now().toString());
//     },
//   }),
// });

// const user = new User({
//   username: "nhitran",
//   password: "hello123",
//   email: "nhitran26197@gmai.com",
//   member_id: "1",
// });

// const member = new Member({
//   member_id: 23,
//   name: "Nhi Tran",
//   age: 22,
//   account: "nitran",
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

app.get('/tshirt', (req, res) => {
  res.status(200).send({
    shirt: 'ligma balls',
    size: 'large'
  })
});
app.post("/signup", signUp);
app.post("/login", login);
app.post("/gmaillogin", gmaillogin);
app.get("/user", users);
app.get("/pwReset", pwReset);
app.put("/changepw", changepw);
//app.post("/testing", testing);
//app.post("/addmember", addMember);
// app.get("/showtree/parent", showTree.parent);
// app.get("/showtree/children", showTree.children);
// app.get("/showtree/spouse", showTree.spouse);
// app.get("/showtree/sibling", showTree.sibling);
// app.post("/posting", posting);
app.post("/profile", profilePost);
// app.post("/profileget", profileGet);
// app.post("/feedpage/travel", travelPost);
// app.post("/feedpage/event", eventPost);
// app.use("/image", imageController);
//app.use("/getTree", getTree);
console.dir(app.path());
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`listening to port${PORT}`);
});

