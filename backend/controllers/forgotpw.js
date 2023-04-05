const User = require('../models/user');

const forgotPassword = (req, res) => {
    const email = req.body.email;
    User.findOne({email: email}, (err, Data) => {
        if(err) {
            console.log(err);
            res.status(500).send();
        }
        if(!Data) {
            res.json({message: "Email not found."})
        }
        else {
            //send the actual email and use nodemailer


            res.json({message: "Email sent succesfully!"})
        }
    })
}
module.exports = forgotPassword;