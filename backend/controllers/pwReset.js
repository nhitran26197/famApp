const User = require('../models/user');
const sendEmail = require('../controllers/sendEmail');

const pwReset = (req, res) => {
    var userEmail = req.body.email + '';
    console.log(userEmail);
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
            sendEmail(userEmail);
            //console.log("Email sent succesfully!");
            res.status(200).send();
            //res.json({message: "Email sent succesfully!"})
        }
    })
}

module.exports = pwReset;