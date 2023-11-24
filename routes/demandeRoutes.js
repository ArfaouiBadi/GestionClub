const express = require("express");
const {
  createDemande,
  getAllDemandes,
  getDemandeById,
  deleteDemandeById,updateDemandeById
} = require("../controller/demandeController");
const router = express.Router();

router.get("/", getAllDemandes);
router.delete("/:id", deleteDemandeById);
router.get("/:id", getDemandeById);
router.patch("/:id",updateDemandeById);
router.post("/", createDemande);

module.exports = router;
