const User = require('../models/user');
const mongoose = require("mongoose");



const changepw = async (req, res) => {
    //user input
    //console.log(req.body);\
    const { newPassword, email } = req.body;
    console.log(newPassword);

    
    console.log(email);
    //console.log("working before update");
    //save updated user document
    User.updateOne({email: email},
        { $set: { password: newPassword } }, function (err, pw) {
            if (err){
                console.log("Error updating PW");
                console.log(err);
                res.status(500).send();
            }
            else{
                res.status(200).send();
            }
        }
    );
    User.find({email: email}, (err, userData) => {
        console.log(userData);
    });
}

module.exports = changepw;