const Member = require('../models/member');
const User = require('../models/user');
const mongoose = require('mongoose');
//const React = require('react');
//import React, { useState } from 'react';
//import React, { useEffect, useState } from "react";

const signUp = async (req, res) => {
    //user input
    const { username, password, email, bucket_list, post, member_id } = req.body;
    console.log(username);
    //generate ascii value for the username
    //let ascii = "";
    //for (let i = 0; i < username.length; i++) {
    //     ascii = username.charCodeAt(i).toString().concat(ascii);
    //}
    //let memberID = parseInt(ascii);
    //let random = User.count();
    let exitCondition = 0;

    let estimate = await User.estimatedDocumentCount();
    //onsole.log(estimate + " this is the estimate");
    //var hmm = User.find({}).length;
    //let resss = await User.find({});
    //const [length, setLength] = useState(0);
    //console.log(resss + " hi trevor");
    //var fuck = User.count();
    //const fuck = User.countDocuments();
    //console.log(fuck + " common juan w");
    //var memberID = 0;
    //var lolaturswag = User.find({}).length;
    //console.log(lolaturswag + " please work this time");
    //User.find({}).then((res)=> console.log(res.length));
   //setLength(User.find({}).then((res) => res.length));
    //console.log(length);
                                //console.log(res.length));
    //User.find({}).then((res)=> console.log(res.length() + "this is line 15 homie AND ASDJIFKLADSJHFDSAKJHDSOFUIHIUYBFJASDVBGHCUIYADSJKVBHAJDKSFBHIJASLK;DFJALKSDJFKL;ASDJFKLSADJFASDKL;FJASKL;JFKLASDJFSKLUYASBDJKJKHBADHSFIUYADSFKSDHF"))
    //console.log("this is line 16 homie");
    //random = random + 1;
    //console.log(random);
    //console.log(User.count());
    //memberID = 0;
    //console.log(memberID);
    const new_User = new User({
        username: username,
        password: password,
        email: email,
        bucket_list: bucket_list,
        post: post,
        member_id: estimate,
      });
      //new_User.save();
    //let count = 0;
    console.log(new_User);
    //console.log("after this one and checking member id of   " + memberID);

    User.exists({username: username}, (err, result) => {
        if(err) {
            console.log(err);
            res.status(500).send();
            console.log("no?");
        }
        else {
            console.log(result);
            console.log("yes?");
        }
    })


    while(User.exists({member_id: estimate}))
    {
        console.log("member id already exists so adding one");
        estimate = estimate + 1;
        exitCondition = exitCondition + 1;
        if(exitCondition > 10)
        {
            console.log("leave me alone");
            break;
        }
    }
    new_User.member_id = estimate;
    console.log("ITS FINALLY WORKING");
    
    //console.log(User.exists({member_id: memberID}));
    

    //check if member id is in use
    // while(User.exists({member_id: memberID}))
    // { 
    //     memberID = memberID + 1;
    //     console.log(memberID);
    //     console.log("member id already exists so adding one");
    // }

    //add user to database
    User.create(new_User, (err, user) => {
        if (err) {
            console.log(err);
            res.status(500).send();
        }
        else {
            res.status(200).send();
        }
    });
    console.log("It made it all the way cuhhhh");

    // //function to check if member id is in use
    // const checkID = User.countDocuments({member_id: memberID}, (err, count) => {
    //     if(err) {
    //         console.log(err);
    //         res.status(500).send();
    //     }
    //     if(count > 0)
    //     {
    //         console.log("member id already exists");
    //         increm

    // //funtion that actually checks id and adds to database
    // User.countDocuments({member_id: memberID}, (err, count) => {
    //     if(err) {
    //         console.log(err);
    //         res.status(500).send();
    //     }
    //     if(count > 0)
    //     {
    //         console.log("member id already exists");
    //         currentID = currentID + 1;
    //         signUp.currentID.countDocuments({member_id: currentID}, (err, count));
    //         //User.countDocuments({member_id: currentID}, (err, count));
    //     }
    //     else
    //     {
    //         //this means id is not in use
    //         User.create(new_User, (err, user) => {
    //             if (err) {
    //                 console.log(err);
    //                 res.status(500).send();
    //             }
    //             else {
    //                 res.status(200).send();
    //             }
    //         }
    //         )  
    //         console.log("It made it all the way cuhhhh");
    //     }
       
    //check to make sure current member ID is not in use
    // console.log("its before this");

    // //add user to database
    
    // console.log(User.exists(new_User.memberID));
    

    // User.findById(username.memberID, (err, user) => {
    //     if (err) {
    //         console.log(err);
    //         res.status(500).send();
    //         console.log("find by id 1");
    //     }
    //     else if (!user) {
    //         console.log(user);
    //         console.log("find by id 2");
    //         res.status(404).send();
    //     }
    //     else {
    //         //add to database
    //         console.log("find by id 3");
    //         User.insertOne(new_User, (err, user) => {
    //             if (err) {
    //                 console.log(err);
    //                 res.status(500).send();
    //             }
    //             else {
    //                 res.status(200).send();
    //             }
    //         })       
    //         console.log("User was inserted weeee");
    //     }
    // });
    // User.create(new_User, (err, user) => {
    //     if (err) {
    //         console.log(err);
    //         res.status(500).send();
    //     }
    //     else {
    //         res.status(200).send();
    //     }
    // }
    // )  
    // console.log("It made it all the way cuhhhh");
}

module.exports = signUp;