const UserModel = require("../models/UserModel")

const getUsers = async (req, res) => {
    const users = await UserModel.find();
    console.log(users);
    res.json(users);
}

module.exports = {
    getUsers
}