const userModel = require("../models/user.js");

const postUser = async (req, res) => {
  const user = new userModel(req.body);

  try {
    await user.save();
    res.status(201).send(user)
  } catch (error) {
    res.status(400).send(error)
  }
};

const getUser = async (req, res) => {
  if ("name" in req.body) {
    try {
      const users = await userModel.find({ name: req.body.name });
      res.send(users);
    } catch (error) {
        return res.status(404).send();
    }
  } else if ("email" in req.body) {
    try {
      const users = await userModel.find({ email: req.body.email });
      res.send(users);
    } catch (error) {
        return res.status(404).send();
    }
  } else res.json({ error: `Required field not filled` });
};

const getUserById = async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await userModel.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send();
  }
};

const getUsers = async (req, res) => {
  const users = await userModel.find();
  res.send(users);
};

const patchUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["role", "department", "name", "phone", "address"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteUser = async (req, res) => {
  if ("name" in req.body) {
    try {
      await userModel.deleteOne({ name: req.body.name });
      res.send({ success: true });
    } catch (error) {
      res.send({ error: `Users not found` });
    }
  } else if ("email" in req.body) {
    try {
      await userModel.deleteOne({ email: req.body.name });
    } catch (error) {
      return res.status(404).send();
    }
  } else res.json({ error: `Required field not filled` });
};

const deleteUserById = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  postUser,
  getUser,
  getUserById,
  getUsers,
  patchUser,
  deleteUser,
  deleteUserById,
};
