const express = require("express");
const { postUser, getUser, getUserById, getUsers, patchUser, deleteUser, deleteUserById} = require("../controllers/user");
const router = express.Router();

router.post("/user", postUser);
router.get("/user/:id", getUserById);
router.get("/user/all", getUsers);
router.get("/user", getUser);
router.patch("/user/:id", patchUser);
router.delete("/user/:id", deleteUserById);
router.delete("/user", deleteUser);

module.exports = router;
