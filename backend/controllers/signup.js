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
    let exitCondition = 0;

    let estimate = await User.estimatedDocumentCount();
    const new_User = new User({
        username: username,
        password: password,
        email: email,
        bucket_list: bucket_list,
        post: post,
        member_id: estimate,
      });
      const new_Member = new Member({
        member_id: estimate,
        account: username,
        picture: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
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

    //add user to database
    User.create(new_User, (err, user) => {
        if (err) {
            console.log(err);
            res.status(500).send();
        }
        else {
            res.status(200).send();
        }
    })
    
    Member.create(new_Member, (err, member) => {
        if (err) {
            console.log(err);
            res.status(500).send();
        }
        else {
            res.status(200).send();
        }
    })
    console.log("It made it all the way cuhhhh");
}

module.exports = signUp;