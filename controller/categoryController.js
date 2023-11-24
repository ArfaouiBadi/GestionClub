const salle = require("../models/salle");

const getAllsalles = async (req, res) => {
  try {
    const salles = await salle.find();
    res.status(200).json(salles);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getsalleById = async (req, res) => {
  const { id } = req.params;
  try {
    const salle = await salle.findById(id);
    if (!salle) {
      return res.status(404).json({ error: "salle not found" });
    }
    res.status(200).json(salle);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const createsalle = async (req, res) => {
  try {
    const newsalle = new salle(req.body);
    const savedsalle = await newsalle.save();
    res.status(201).json(savedsalle);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updatesalle = async (req, res) => {
  const { id } = req.params;
  try {
    const Usalle = await salle.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    res.status(200).json(Uproduct);
  } catch (err) {
    return res.status(404).json({ err: err.message });
  }
};

const deletesalle = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedsalle = await salle.findByIdAndDelete(id);
    if (!deletedsalle) {
      return res.status(404).json({ error: "salle not found" });
    }
    res.status.json(deletedsalle);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllsalles,
  getsalleById,
  createsalle,
  updatesalle,
  deletesalle,
};
