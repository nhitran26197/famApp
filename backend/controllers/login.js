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
    User.findOne({username: "froppyboppy" }, (err, userData) => {
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
                res.json({message: "nope you stupid bitch"});
            }
        }
    }
    );
}



module.exports = {login, users};