const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const {searchFood,getHistory} = require("../controllers/nutrientController");
router.post("/search", auth, searchFood);
router.get("/history", auth, getHistory);
module.exports = router;