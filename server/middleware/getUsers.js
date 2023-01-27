const UserModel = require("../models/UserModel")

const getUsers = (req, res) => {
    const users = UserModel.find();
    res.json(users);
}

module.exports = {
    getUsers
}