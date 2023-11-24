const Demande = require("../models/demande");

// Create a new commande
const createDemande = async (req, res) => {
  try {
    const { idUser,materials,quantity,club,date,details } = req.body;
    const demande = new Demande({ materials, idUser,email });
    const savedDemande = await demande.save();
    res.status(201).json(saveddemande);
  } catch (error) {
    res.status(500).json({ error: "Failed to create demande" });
  }
};

// Get all demandes
const getAllDemandes = async (req, res) => {
  try {
    const demandes = await Demande.find().limit(5);
    res.status(200).json(demandes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch commandes" });
  }
};

// Get a single commande by ID
const getDemandeById = async (req, res) => {
  try {
    const { demandeId } = req.params;
    const demande = await Demande.findById(demandeId);
    if (demande) {
      res.status(200).json(demande);
    } else {
      res.status(404).json({ error: "demande not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch demande" });
  }
};

// Update a demande by ID
const updateDemandeById = async (req, res) => {
  try {
    const { demandeId } = req.params;
    const { idUser,materials,quantity,club,date,details } = req.body;
    const updatedDemande = await Commande.findByIdAndUpdate(
      commandeId,
      { idUser,materials,quantity,club,date,details },
      { new: true }
    );
    if (updatedDemande) {
      res.status(200).json(updatedDemande);
    } else {
      res.status(404).json({ error: "Commande not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update commande" });
  }
};

// Delete a commande by ID
const deleteDemandeById = async (req, res) => {
  try {
    const { demandeId } = req.params;
    const deletedDemande = await Demande.findByIdAndDelete(demandeId);
    if (deletedDemande) {
      res.status(200).json({ message: "demande deleted successfully" });
    } else {
      res.status(404).json({ error: "demande not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete demande" });
  }
};

module.exports = {
  createDemande,
  getAllDemandes,
  getDemandeById,
  updateDemandeById,
  deleteDemandeById,
};
