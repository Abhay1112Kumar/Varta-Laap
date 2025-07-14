const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Register new user
router.post("/", registerUser);

// Login existing user
router.post("/login", authUser);

// Get all users (with optional search query), protected route
router.get("/", protect, allUsers);

module.exports = router;
