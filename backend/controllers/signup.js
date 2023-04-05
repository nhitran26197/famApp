const Member = require('../models/member');
const User = require('../models/user');

const signUp = (req, res) => {
    //user input
    const { username, password, email } = req.body;
    //generate ascii value for the username
    let ascii = "";
    for (let i = 0; i < username.length; i++) {
         ascii = username.charCodeAt(i).toString().concat(ascii);
    }
    let memberID = parseInt(ascii);
    const newUser = {
        email,
        password,
        username,
        member_id,  
    }

    const newMember = {
        member_id: memberID,
    }

    //check if user exists
    User.findById(username, (err, user) => {
        if (err) {
            console.log(err);
            res.status(500).send();
        }
        else if (!user) {
            res.status(404).send();
        }
        else {
            //add to database
            User.insertOne(newUser, (err, user) => {
                if (err) {
                    console.log(err);
                    res.status(500).send();
                }
                else {
                    res.status(200).send();
                }
            }
            )       
        }
    }
    );
    Member.insertOne(newMember, (err, user) => {
        if (err) {
            console.log(err);
            res.status(500).send();
        }
        else {
            res.status(200).send();
        }
    }
    )  
}

module.exports = signUp;