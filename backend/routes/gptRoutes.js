const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const {

createGPT,
getMyGPTs,
getSingleGPT

} = require("../controllers/gptController");

router.post(
"/gpt",
authMiddleware,
createGPT
);

router.get(
"/gpt",
authMiddleware,
getMyGPTs
);

router.get(
"/gpt:id",
authMiddleware,
getSingleGPT
);

module.exports = router;