const express = require("express");
const { uploadPhoto, getPhotos } = require("../controllers/photoController");
const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/upload", authenticate, uploadPhoto);
router.get("/", authenticate, getPhotos);

module.exports = router;
