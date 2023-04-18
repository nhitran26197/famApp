//import schemas of the user and members
const User = require('../models/user');

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


const login = (req, res) => {
    //user input
    const { username, password } = req.body;
    console.log(username);
    User.findOne({username: username }, (err, userData) => {
        console.log("ligma");
        if (err) {
            console.log(err);
            res.status(500).send();
            return
        }
        console.log("fugma");
        if (userData) {
        console.log(userData);
            if (userData.password === password) {
                console.log("login successful");
                res.json({message: "login successful"});
            }
            else {
                console.log("DIEEEE");
                res.json({message: "wrong password you idiot sandwich"});
            }
        }
        else
        {
            console.log("nope dont work");
            res.json({message: "username doesnt exist CUH"});
            return;
        }
    }
    );
}



module.exports = {login, users};