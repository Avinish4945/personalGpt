const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const {

createGPT,
getMyGPTs,
getSingleGPT,
deleteGPT

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

router.delete(
    "/:id",
    authMiddleware,
    deleteGPT
);

module.exports = router;