const express = require("express");
const router = express.Router();
const {
  updateMaterial,
  deleteMaterial,
  getMaterial,
  getMaterials,
  createMaterial,
} = require("../controller/materialController");

router.get("/", getMaterials);
router.get("/:id", getMaterial);
router.post("/", createMaterial);
router.patch("/:id", updateMaterial);
router.delete("/:id", deleteMaterial);
module.exports = router;
