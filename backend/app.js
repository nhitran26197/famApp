const dbConnect = require("./controllers/connectMongoDb");
const User = require("./models/user");
const Member = require("./models/member");
dbConnect();

const user = new User({
  username: "nhitran",
  password: "hello123",
  email: "nhitran26197@gmai.com",
  member_id: "1",
  post: {
    post_id: 1,
    caption: "first post",
  },
});
const member = new Member({
  member_id: 1,
  name: "nhitran",
  age: 26,
  account: "nhitran",
});

user
  .save()
  .then(() => {
    console.log("saved to mongoDB");
  })
  .catch((error) => {
    console.log("not saved ");
  });

member
  .save()
  .then(() => {
    console.log("saved to mongoDB");
  })
  .catch((error) => {
    console.log("not saved ");
  });
