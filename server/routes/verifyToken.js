const { func } = require("@hapi/joi");
const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  const token = req.header("auth-token");
  if (!token) res.status(401).send("Access Denied");

  try {
    const verifyToken = jwt.verify(token, process.env.TOKEN);
    req.user = verified;
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
}
