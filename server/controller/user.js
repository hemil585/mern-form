const mongoose = require("mongoose");
const model = require("../model/user");
const User = model.User;

exports.createUser = (req, res) => {
  try {
    const { username, password } = req.body;
    const data = {
      username: username,
      password: password,
    };
    console.log("data: ", data);
    const user = new User(data);
    const savedUser = user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.log("data: ", data);
    console.log(err);
    res.status(401).json(err);
  }
};
