const router = require("express").Router();
const jwt = require('jsonwebtoken');
const { model } = require("mongoose");
const Users = require("../model/Users");

router.post("/register", async (req, res) => {
    const event = req.body.event;
    const token = req.body.token;
    const userId = jwt.verify(token,"ajahfladshflkjashdflkjahsdfjklahdsjf")._id;
    const user = Users.findOne({ _id: userId });
    user.events.push(event);
    user.save();
    res.status(200).json({
        user: user,
        success: "Event Registered"
    })
})

module.exports = router;