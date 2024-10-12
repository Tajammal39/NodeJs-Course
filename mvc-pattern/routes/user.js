const express = require("express");
const {
  handleGetAllUsers,
  handleUserById,
  handleDeleteUser,
  handleUpdateUser,
  handleCreateUser,
  handleDisplayData,
} = require("../controller/user");

const router = express.Router();

//get all user
router.get("/", handleGetAllUsers);

// get one user by id
router.get("/:id", handleUserById);

router.get("/api/users", handleDisplayData);

//delete user by id
router.delete("/:id", handleDeleteUser);

//update one user by id
router.patch("/:id", handleUpdateUser);

//handle create user
router.post("/", handleCreateUser);

module.exports = router;
