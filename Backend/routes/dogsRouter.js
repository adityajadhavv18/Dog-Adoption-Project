const express = require("express");
const router = express.Router();

const { getAllDogs, postDog } = require("../controllers/DogContoller");

router.get("/", getAllDogs);
router.post("/", postDog);

module.exports = router;
