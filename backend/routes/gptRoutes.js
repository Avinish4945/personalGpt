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
"/",
authMiddleware,
createGPT
);

router.get(
"/",
authMiddleware,
getMyGPTs
);

router.get(
"/:id",
authMiddleware,
getSingleGPT
);

module.exports = router;