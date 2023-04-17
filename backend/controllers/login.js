//import schemas of the user and members
const User = require('../models/user');

const login = (req, res) => {
    //user input
    const { username, password } = req.body;
    User.findOne({ username: username }, (err, userData) => {
        if (err) {
            console.log(err);
            res.status(500).send();
        }
        if (userData) {
            if (userData.password === password) {
                res.json({messade: "login successful"});
         
   }
            else {
                res.json({messade: "nope you stupid bitch"});
            }
        }
    }
    );
}



module.exports = login;