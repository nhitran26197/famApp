const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
var MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://juangamezcs:Mesahi@clusterfamapp.5akcfrc.mongodb.net/?retryWrites=true&w=majority';
// const AWS = require("aws-sdk");
// const multer = require("multer");
// const multerS3 = require("multer-s3");
app.use(express.json());

const dbConnect = require("./controllers/connectMongoDb");
const User = require("./models/user");
const Member = require("./models/member");
dbConnect();

// const addMember = require("./controllers/addmember");
// const showTree = require("./controllers/showtree");
// const posting = require("./controllers/posting");
const { profilePost, profileGet } = require("./controllers/profile");
// const { travelPost, eventPost } = require("./controllers/feedpage");
// const imageController = require("./controllers/convertURL");
//const getTree = require("./controllers/getTree");
const {login, users} = require("./controllers/login");
const signUp = require("./controllers/signup");
//const testing = require("./controllers/testing");

var url = 'mongodb://localhost:3001';

console.log(process.env.MY_EMAIL);
console.log(process.env.MY_PASSWORD);
//THIS SECTION IS FOR JUANS MESSY PW RESET LMFAO 
app.use(cors());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));
app.use((req, res, next) => {
res.setHeader("Access-Control-Allow-Origin", "*");
next();
});

function sendEmail({recipient_email, OTP}) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
        },
        });

        const mail_configs = {
          from: process.env.MY_EMAIL,
          to: recipient_email,
          subject: 'FamApp Password Reset',
          htmlL : `<h1> Your OTP is ${OTP} </h1>`,
        };

        transporter.sendMail(mail_configs, function(err, info) {
          if (err) {
            console.log(err);
            return reject({ message: 'Email not sent'});
          } 
          console.log('Email sent: ' + info.response);
          return resolve(info.response);
        });
      });
}



//END OF PW RESET SECTION LOL

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
app.post("/pwReset", (req, res) => {
  sendEmail(req.body)
  .then((response) => res.send(response.message))
  .catch((error) => res.status(500).send(error.message));
});
app.post("/signup", signUp);
app.post("/login", login);
app.get("/user", users);
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

