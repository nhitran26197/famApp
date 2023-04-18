const Member = require('../models/member');
const User = require('../models/user');
const mongoose = require('mongoose');

const signUp = (req, res) => {
    //user input
    const { username, password, email, bucket_list, post, member_id } = req.body;
    console.log(username);
    //generate ascii value for the username
    let ascii = "";
    for (let i = 0; i < username.length; i++) {
         ascii = username.charCodeAt(i).toString().concat(ascii);
    }
    let memberID = parseInt(ascii);
    console.log(memberID);
    const new_User = new User({
        username: username,
        password: password,
        email: email,
        bucket_list: bucket_list,
        post: post,
        member_id: memberID,
      });
      //new_User.save();
    
    console.log(new_User);

    

    //check if user exists
    User.findById(username.memberID, (err, user) => {
        if (err) {
            console.log(err);
            res.status(500).send();
        }
        else if (!user) {
            res.status(404).send();
        }
        else {
            //add to database
            User.insertOne(new_User, (err, user) => {
                if (err) {
                    console.log(err);
                    res.status(500).send();
                }
                else {
                    res.status(200).send();
                }
            }
            )       
        }
    }
    );
    User.create(new_User, (err, user) => {
        if (err) {
            console.log(err);
            res.status(500).send();
        }
        else {
            res.status(200).send();
        }
    }
    )  
}

module.exports = signUp;