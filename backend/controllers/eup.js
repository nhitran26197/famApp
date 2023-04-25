const Member = require("../models/member");
const User = require("../models/user");


//api to update page and works bc there will be no empty fields
// user logs in (local username in local and email), user enters new username (make post request with the new username)



const eup = (req, res) => {
    let { localusername, local_age, local_email, local_name, usernameInput, emailInput, ageInput, nameInput} = req.body;
    //console.log(req.params);
    //console.log(req);
    //console.log(localusername);
    //console.log(localemail);
    // username: juangamez
   

    if(usernameInput === "")
    {
        usernameInput = localusername;
    }
    if(emailInput === "")
    {
        emailInput = local_email;
    }
    if(!ageInput)
    {
        ageInput = local_age;
    }
    if(nameInput === "")
    {
        nameInput = local_name;
    }

    User.updateOne({username: localusername },
        { $set: { email: emailInput, username: usernameInput} }, {new: true},
        function (err, pw) {
            if (err){
                console.log("Error updating");
                console.log(err);
                res.status(500).send();
            }
            else{
                console.log(pw);
                //localStorage.setItem("user", usernameInput);
                //localStorage.setItem("email", emailInput);
                console.log("Updated Email for user: ", this.username);
                //res.json({username: usernameInput, email: emailInput});
                res.status(200).send();
            }
        }
    )

    Member.updateOne({account: localusername },
        { $set: { age: ageInput, name: nameInput, account: usernameInput} },{new: true},
         function (err, pw) {
            if (err){
                console.log("Error updating");
                console.log(err);
                res.status(500).send();
            }
            else{
                console.log(pw);
                //localStorage.setItem("user", usernameInput);
                //localStorage.setItem("email", emailInput);
                console.log("Update AGE AND NAME for member: ", this.username);
                res.status(200).send();
            }
        }
    )
    console.log("working after update");
   

}
module.exports = eup;