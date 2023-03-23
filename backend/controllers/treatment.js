const treatmentModel = require("../models/treatment.js");

const postTreatment = async (req, res) => {
  const user = new treatmentModel(req.body);

  try {
    await user.save();
    res.status(201).send(user)
  } catch (error) {
    res.status(400).send(error)
  }
};

const getTreatment = async (req, res) => {
  if ("name" in req.body) {
    try {
      const users = await treatmentModel.find({ name: req.body.name });
      res.send(users);
    } catch (error) {
        return res.status(404).send();
    }
  } else if ("email" in req.body) {
    try {
      const users = await treatmentModel.find({ email: req.body.email });
      res.send(users);
    } catch (error) {
        return res.status(404).send();
    }
  } else res.json({ error: `Required field not filled` });
};

const getTreatmentById = async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await treatmentModel.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send();
  }
};

const getTreatments = async (req, res) => {
  const users = await treatmentModel.find();
  res.send(users);
};

const patchTreatment = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["roles", "departments"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const user = await treatmentModel.findByIdAndUpdate(req.params.id, req.body, {
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

const deleteTreatment = async (req, res) => {
  if ("name" in req.body) {
    try {
      await treatmentModel.deleteOne({ name: req.body.name });
      res.send({ success: true });
    } catch (error) {
      res.send({ error: `Users not found` });
    }
  } else if ("email" in req.body) {
    try {
      await treatmentModel.deleteOne({ email: req.body.name });
    } catch (error) {
      return res.status(404).send();
    }
  } else res.json({ error: `Required field not filled` });
};

const deleteTreatmentById = async (req, res) => {
  try {
    const user = await treatmentModel.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  postTreatment,
  getTreatment,
  getTreatmentById,
  getTreatments,
  patchTreatment,
  deleteTreatment,
  deleteTreatmentById,
};
