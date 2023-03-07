const router = require("express").Router();
const User = require("../model/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  registrationValidation,
  loginValidation,
} = require("../helpers/validataion");

// registration
router.post("/register", async (req, res) => {
  // validation
  const { error } = registrationValidation(req.body);
  if (error) return res.status(400).json({ "error": error.details[0].message });

  //   check if already exists
  const usernameExists = await User.findOne({ username: req.body.username });
  if (usernameExists)
    return res.status(400).json({
      "error": "Username Already Exists",
    });
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists)
    return res.status(400).json({ "error": "Email Already Exists" });

  //   hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // create
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    college: req.body.college,
    email: req.body.email,
    password: hashedPassword,
  });
  // save
  try {
    const saveduser = await user.save();
    res.status(200).json({ "success": "Registered Successfully" });
  } catch (error) {
    res.status(400).json({
        "error" : "Not Registered"
    });
  }
});

// login
router.post("/login", async (req, res) => {
  // validation
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  // check if email doesn't exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ error: "Email Not Found" });

  //   check if password is correct
  const checkPass = await bcrypt.compare(req.body.password, user.password);
  if (!checkPass)
    return res.status(400).json({ error: "Password is incorrect" });

  res.send("Logged in");

  //   assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN);
  res.header("auth-token", token).send(token);
});

module.exports = router;
