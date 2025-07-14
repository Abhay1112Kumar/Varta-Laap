const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Get all messages for a specific chat
router.route("/:chatId").get(protect, allMessages);

// Send a new message
router.route("/").post(protect, sendMessage);

module.exports = router;
