const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors(), express.json());
app.use(express.urlencoded({ extended: true }));
//import S3 bucket
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { uploadFile } = require("./controllers/uploadFile");

//cnnect to mongoDB
const dbConnect = require("./controllers/connectMongoDb");
dbConnect();

//import controllers
const User = require("./models/user");
const Member = require("./models/member");
const addMember = require("./controllers/addmember");
const showTree = require("./controllers/showtree");
const posting = require("./controllers/posting");
const { profilePost, profileGet } = require("./controllers/profile");
const { travelPost, eventPost } = require("./controllers/feedpage");
const getTree = require("./controllers/getTree");

// const user = new User({
//   username: "nhitran",
//   password: "hello123",
//   email: "nhitran26197@gmai.com",
//   member_id: "1",
// });

const member = new Member({
  member_id: 1,
  name: "Nhi the best",
  age: 33,
  picture: "https://upload-picture-testing.s3.us-east-2.amazonaws.com/cd4ce9c21b80cfdcdff9d798d80666a1",
  account: "nhi123",
  parents: [], // array of member_id
  children: [{id:"mike123",type:"blood"}],
  siblings: [],
  spouses: [],
});

const member2 = new Member({
  member_id: 2,
  name: "mike",
  age: 35,
  picture: "https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg",
  account: "mike123",
  parents: [{id:"nhi123",type:"blood"}], // array of member_id
  children: [],
  siblings: [],
  spouses: [],
});

const member3 = new Member({
  member_id: 3,
  name: "chandra",
  age: 19,
  picture: "https://i.ibb.co/Hn9FVys/Profile-SF-min.png",
  account: "chandra123",
  parents: [], // array of member_id
  children: [],
  siblings: [],
  spouses: [{id:"nhi123",type:"marriage"}],
});

// user
//   .save()
//   .then(() => {
//     console.log("saved to mongoDB");
//   })
//   .catch((error) => {
//     console.log("not saved ");
//   });

// member3
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
app.post("/posting", posting);
app.post("/profile", profilePost);
app.post("/profileget", profileGet);
app.post("/feedpage/travel", travelPost);
app.post("/feedpage/event", eventPost);
//app.use("/image", imageController);
app.get("/getTree", getTree);

app.post("/images", upload.single("image"), async (req, res) => {
  const file = req.file;
  console.log(file);

  // apply filter
  // resize

  const result = await uploadFile(file);
  console.log(result.Location);
  await unlinkFile(file.path);

  res.send(result.Location);
});

const PORT = 3010;
app.listen(PORT, () => {
  console.log(`listening to port${PORT}`);
});
