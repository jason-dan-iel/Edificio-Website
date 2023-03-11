const router = require("express").Router();
const jwt = require("jsonwebtoken");
const Users = require("../model/Users");

router.post("/register", async (req, res) => {
  const token = req.body.token;
  const event = req.body.event;

  // finding the user
  const userId = jwt.verify(token, "ajahfladshflkjashdflkjahsdfjklahdsjf")._id;
  const user = await Users.findById(userId);

  if (!user.events.includes(event)) {
    user.events.push(event);
    await user.save();
    res.status(200).json({
      success: "Registered Successfully",
    });
  } else {
    res.status(200).json({
      success: "Already Registered",
    });
  }
});

router.post("/deregister", async (req, res) => {
  const token = req.body.token;
  const event = req.body.event;

  // finding the user
  const userId = jwt.verify(token, "ajahfladshflkjashdflkjahsdfjklahdsjf")._id;
  const user = await Users.findById(userId);

  if (user.events.includes(event)) {
    // user.events.delete(event);
    user.events.remove(event);
    await user.save();
    res.status(200).json({
      success: "Deregistered Successfully",
    });
  } else {
    res.status(200).json({
      success: "Register First!",
    });
  }
});

module.exports = router;
