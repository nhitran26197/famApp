//import schemas of the user and members
const User = require('../models/user');
const bcrypt = require("bcrypt");

const users = (req, res) => {
    User.find({}, (err, userData) => {
        if (err) {
            console.log(err);
            res.status(500).send();
            return
        }
        res.json(userData);
    });
}


const gmaillogin = (req, res) => {
    //user input
    const email = req.body;
    console.log(email);
    User.findOne({email: email }, (err, userData) => {
        console.log("ligma");
        if(userData)
        {
            console.log("login successful");
            res.status(200).send();
        }
        // if (err) {
        //     console.log(err);
        //     console.log("internal server error");
        //     res.status(500).send();
        //     return
        // }
        // console.log("fugma");
        // if (userData) 
        // {
        //     console.log("login successful");
        //     res.status(200).send();
        // console.log(userData.password);
        // console.log(password);
        // bcrypt.compare(password, userData.password, (err, result) => {
        //     if (err) {
        //       console.log(err);
        //       return;
        //     }
        //     if(result)
        //     {
        //         console.log("login successful");
        //         res.status(200).send();
        //     }
        //     else
        //     {
        //         console.log("Wrong password");
        //         res.status(400).send();
        //     }
        //     console.log('Password match:', result);
        //   });

            // if (userData.password === password) {
            //     //console.log("login successful");
            //     res.status(200).send();
            // }
            // else {
            //     //console.log("Wrong password");
            //     res.status(400).send();
            // }
        //}
        else
        {
            console.log("something weird happened");
            res.status(404).send();
            //res.json({message: "username doesnt exist CUH"});
            //return;
        }
    }
    );
}



module.exports = gmaillogin;