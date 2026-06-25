const express = require("express");
const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const upload =
require("../middleware/uploadMiddleware");

const {
  uploadDocument, getDocuments,deleteDocument
} = require("../controllers/DocumentController");

// const {
//   getDocuments,
// }=require("../controllers/DocumentController")

router.post(
  "/upload/:gptId",
  authMiddleware,
  upload.single("file"),
  uploadDocument
);
router.get(
  "/:gptId",
  authMiddleware,
  getDocuments
);
router.delete(
  "/:documentId",
  authMiddleware,
  deleteDocument
);
module.exports = router;