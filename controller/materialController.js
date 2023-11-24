const materials = require("../models/material");

const path = require("path");

const createMaterial = async (req, res) => {
  const { title, image, description, otherView, quantity } = req.body;
  const emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!otherView) {
    emptyFields.push("otherView");
  }
  if (!quantity) {
    emptyFields.push("quantity");
  }
  if (!image) {
    emptyFields.push("image");
  }
  if (!description) {
    emptyFields.push("description");
  }

{/*  if (emptyFields.length > 0) {
    return res.status(400).json({ error: `Missing required fields: ${emptyFields.join(", ")}` });
  }*/}

  try {
    const material = new materials({
      title,
      image,
      quantity,
      description,
      otherView,
    });
    console.log("alo")
    await material.save();
    res.status(201).json(material);
    
  } catch (err) {
    return res.status(500).json({ error: "Failed to create Material" });
  }
};

// Replace "materials" with the actual model name you are using


const getMaterials = async (req, res) => {
  try {
    const Materials = await Materials.find();
    res.status(200).json(Materials);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Materials" });
  }
};

const getMaterial = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const Material = await materials.findById(id);
    res.status(200).json(Material);
  } catch (err) {
    return res.status(404).json({ err: "produit not found" });
  }
};

const deleteMaterial = async (req, res) => {
  const { id } = req.params;
  try {
    const Pdeleted = await materials.findByIdAndDelete({ _id: id });

    res.status(200).json(Pdeleted);
  } catch (err) {
    return res.status(404).json({ err: "Material Not found" });
  }
};

const updateMaterial = async (req, res) => {
  const { id } = req.params;
  try {
    const UMaterial = await materials.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    res.status(200).json(UMaterial);
  } catch (err) {
    
    return res.status(404).json({ err: err.message });
  }
};

module.exports = {
  updateMaterial,
  deleteMaterial,
  getMaterial,
  getMaterials,
  createMaterial,
};
