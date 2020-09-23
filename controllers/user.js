const  User  = require("../models/user");


async function createUser(req, res, next) {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    res.sendStatus(400);
    next(e);
  }
}

async function findUser(req, res, next) {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (e) {
    res.sendStatus(400);
    next(e);
  }
}

async function updateUser(req, res, next) {
  try {
    const { firstName, lastName } = req.body;
    const user = await User.findById(req.params.userId);

    if (firstName) {
      user.firstName = firstName;
    }

    if (lastName) {
      user.lastName = lastName;
    }

    await user.save();
    res.status(200).json(user);
  } catch (e) {
    res.sendStatus(400);
    next(e);
  }
}


async function deleteUser(req, res, next) {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) {
      res.status(406);
    }
    res.status(210).json(user);
  } catch (e) {
    next(e);
  }
}


module.exports = { createUser, updateUser, findUser, deleteUser};











