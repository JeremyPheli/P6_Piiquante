const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const multer = require("../middleware/multer-config");
const sauceCtrl = require("../controllers/sauce");

router.post("/", auth, multer, sauceCtrl.createSauce);

router.post("/:id", auth, sauceCtrl.LikeOrDislikeSauce);

router.put("/:id", auth, multer, sauceCtrl.modifySauce);

router.delete("/:id", auth, sauceCtrl.deleteSauce);

router.get("/", auth, sauceCtrl.getAllSauce);

router.get("/:id", auth, sauceCtrl.getOneSauce);

module.exports = router;
