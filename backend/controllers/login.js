//import schemas of the user and members
const User = require('../models/user');
const Member = require('../models/member');
const bcrypt = require("bcrypt");

const members = (req, res) => {
    Member.find({ account : userData.username}, (err, memberData) => {
        if (err) {
            console.log(err);
            res.status(500).send();
            return
        }
        console.log(memberData);
        res.json(memberData);
    });
}

const users = (req, res) => {
    User.find({}, (err, userData) => {
        if (err) {
            console.log(err);
            res.status(500).send();
            return
        }
        console.log(userData);
        res.json(userData);
    });
}


const login = (req, res) => {
    //user input
    const { username, password } = req.body;
    console.log(username);
    User.findOne({username: username }, (err, userData) => {
        console.log("ligma");
        //console.log(userData.username);
        if (err) {
            console.log(err);
            console.log("internal server error");
            res.status(500).send();
            return
        }
        console.log("fugma");
        console.log(password);
        if (userData) {
        //console.log(userData.password);
        console.log(password);
        bcrypt.compare(password, userData.password, (err, result) => {
            console.log(result);
        });
        bcrypt.compare(password, userData.password, (err, result) => {
            if (err) {
              console.log(err);
              return;
            }
            if(result)
            {
                console.log("login successful");
                //let MemberData = [];

                Member.find({ account : userData.username}, (err, memberData) => {
                    if (err) {
                        console.log(err);
                        //res.status(500).send();
                        return
                    }
                    //console.log(memberData);
                    //console.log(typeof userData);
                    let finalObj = {
                        ...userData,
                        ...memberData
                    };
                    res.json(finalObj);
                    res.status(200).send();
                    console.log(finalObj);
                });

                //res.json(userData);

                // res.status(200).send();
            }
            else
            {
                console.log("Wrong password");
                res.status(400).send();
            }
            console.log('Password match:', result);
          });

            // if (userData.password === password) {
            //     //console.log("login successful");
            //     res.status(200).send();
            // }
            // else {
            //     //console.log("Wrong password");
            //     res.status(400).send();
            // }
        }
        else
        {
            console.log("username doesnt exist");
            res.status(404).send();
            console.log("asdfa");
            //res.json({message: "username doesnt exist CUH"});
            //return;
        }
    }
    );
}



module.exports = {login, users, members};