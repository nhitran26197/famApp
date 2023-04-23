const User = require('../models/user');
//const sendEmail = require('../controllers/sendEmail');
const nodeMailer = require('nodemailer');
// const User = require('../models/user');
const bcrypt = require("bcrypt");
const bcryptSalt = process.env.BCRYPT_SALT;
const mongoose = require("mongoose");

// const changepw = async (req, res) => {
//     try {
//     //user input
//     //console.log(req.body);
//     const { newPassword } = req.body;
//     console.log(newPassword);
//     console.log(userEmail);

//     //salt and hash new password
//     let hash = await bcrypt.hash(newPassword, Number(bcryptSalt));
//     //newPassword = hash;
//     console.log(newPassword);
//     console.log("PASSWORD ABOVE IS OLD BELOW IS HASH");
//     //update password in user document
//     console.log(hash);
//     //console.log("working before update");
//     //save updated user document
//     User.updateOne({email: userEmail},
//         { $set: { password: hash } }, function (err, pw) {
//             if (err){
//                 console.log("Error updating PW");
//                 console.log(err);
//                 res.status(500).send();
//             }
//             else{
//                 //console.log("Updated PW for user: ", this.member_id);
//                 res.status(200).send();
//             }
//         }
//     );
//     User.find({email: userEmail}, (err, userData) => {
//         console.log(userData);
//     });
//     } catch (error)
//     {
//         console.log(error);
//     }
//     //console.log("working after update");

// };


const sendEmail = async () => {
    try {
        const transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            secure: true,
            auth: {
                user: 'juan.gamez.cs',
                pass: 'mmhcvhbjylwgpysa'
            }
        });

        await transporter.sendMail({
            from: 'juan.gamez.cs@gmail.com <juan.gamez.cs@gmail.com>',
            to: userEmail,
            subject: 'Reset your password',
            html: '<a href="http://localhost:3001/changepw">Click this totally not suspicious link to reset your password!</a>'
        });
        //console.log(email);
        console.log("Email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};
let userEmail = "";

const pwReset = (req, res) => {
    const email = req.body.email;
  

    userEmail = email;
    //console.log(typeof userEmail);
    User.findOne({email: userEmail}, (err, Data) => {
        if(err) {
            console.log(err);
            console.log("internal server error");
            res.status(500).send();
        }
        if(!Data) {
            console.log("Email doesnt exist");
            res.status(404).send();
        }
        else {
            //send the actual email and use nodemailer
            //console.log(typeof userEmail);
            sendEmail();
            //console.log("Email sent succesfully!");
            res.status(200).send();
            //res.json({message: "Email sent succesfully!"})
        }
    })
}

module.exports = pwReset;