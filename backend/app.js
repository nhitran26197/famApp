const dbConnect = require("./controllers/connectMongoDb");
const User = require("./models/user");
const Member = require("./models/member");
const signUp = require("./controllers/signup");
const login = require("./controllers/login");
const forgotpw = require("./controllers/forgotpw");
const nodemailer = require('nodemailer');

require('dotenv').config();

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

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.PASSWORD
    }
});

let mailOptions = {
    from: '"Juan" <temp@gmail.com>', // sender address     
    to: "bigboi@gmail.com", // receiver address
    subject: "Password Reset", // Subject line     
    text: "Hello idiot, you forgot your password", // plain text body     
    html: "<b>click here</b>", // html body   
};

transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
        console.log('error sending email', err);
    } else {
        console.log('email sent successfully');
    }
});