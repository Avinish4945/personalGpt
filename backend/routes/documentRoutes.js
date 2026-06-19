const express = require("express");
const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const upload =
require("../middleware/uploadMiddleware");

const {
  uploadDocument,
} = require("../controllers/DocumentController");

router.post(
  "/upload/:gptId",
  authMiddleware,
  upload.single("file"),
  uploadDocument
);

module.exports = router;