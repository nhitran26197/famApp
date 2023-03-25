const Member = require("../models/members");
const User = require("../models/user");

const posting = (req, res) => {
    let request = req.body;
    member_id = request.member_id;
    let caption = request.caption;
    let pic = request.picture;
    let coords = [request.location_long, request.location_lat];
    let type = request.type;
