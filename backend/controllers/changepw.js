const User = require('../models/user');
const bcrypt = require("bcrypt");
const bcryptSalt = process.env.BCRYPT_SALT;

const changepw = async (req, res) => {
    //user input\
    const{email, newPassword} = req.body;

    //salt and hash new password
    let hash = await bcrypt.hash(newPassword, Number(bcryptSalt));
    //newPassword = hash;
    console.log(newPassword);
    console.log("PASSWORD ABOVE IS OLD BELOW IS HASH");
    //update password in user document
    console.log(hash);
    //console.log("working before update");
    //save updated user document
    User.updateOne({email: email},
        { $set: { password: hash } }, function (err, pw) {
            if (err){
                console.log("Error updating PW");
                console.log(err);
                res.status(500).send();
            }
            else{
                //console.log("Updated PW for user: ", this.member_id);
                res.status(200).send();
            }
        }
    );
    User.find({email: email}, (err, userData) => {
        console.log(userData);
    });
    //console.log("working after update");

}

module.exports = changepw;