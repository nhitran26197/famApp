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
            if (userData.password === password) {
                res.status(200).send({member_id: userData.member_id});
            }
            else {
                res.status(400).send();
            }
        }
        else
        {
            console.log("username doesnt exist");
            res.status(404).send();
        }
    }
    );
}



module.exports = {login, users};