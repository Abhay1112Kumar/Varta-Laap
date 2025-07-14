const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  removeFromGroup,
  addToGroup,
  renameGroup,
} = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Create or access a one-to-one chat
router.route("/").post(protect, accessChat);

// Fetch all chats for the logged-in user
router.route("/").get(protect, fetchChats);

// Create new group chat
router.route("/group").post(protect, createGroupChat);

// Rename group chat
router.route("/rename").put(protect, renameGroup);

// Remove user from group
router.route("/groupremove").put(protect, removeFromGroup);

// Add user to group
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;
