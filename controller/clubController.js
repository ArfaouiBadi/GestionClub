const Club = require("../models/club");

// Create a new Club
const createClub = async (req, res) => {
  try {
    const {
      email,
      clubName,
      phone,
      logoClub,
      description,
    } = req.body;
    const Club = new Club({
      email,
      clubName,
      phone,
      logoClub,
      description,
    });
    const savedClub = await Club.save();
    res.status(201).json(savedClub);
  } catch (error) {
    res.status(500).json({ error: "Failed to create Club" });
  }
};

// Get all Clubs
const getAllClubs = async (req, res) => {
  try {
    const Clubs = await Club.find();
    res.status(200).json(Clubs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Clubs" });
  }
};

// Get a single Club by ID
const getClubById = async (req, res) => {
  try {
    const { ClubId } = req.params;
    const Club = await Club.findById(ClubId);
    if (Club) {
      res.status(200).json(Club);
    } else {
      res.status(404).json({ error: "Club not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Club" });
  }
};

// Update a Club by ID
const updateClubById = async (req, res) => {
  try {
    const { ClubId } = req.params;
    const {
      firstName,
      lastName,
      password,
      email,
      address,
      shopName,
      phone,
      logoShop,
    } = req.body;
    const updatedClub = await Club.findByIdAndUpdate(
      ClubId,
      {
        firstName,
        lastName,
        password,
        email,
        address,
        shopName,
        phone,
        logoShop,
      },
      { new: true }
    );
    if (updatedClub) {
      res.status(200).json(updatedClub);
    } else {
      res.status(404).json({ error: "Club not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update Club" });
  }
};

// Delete a Club by ID
const deleteClubById = async (req, res) => {
  try {
    const { ClubId } = req.params;
    const deletedClub = await Club.findByIdAndDelete(ClubId);
    if (deletedClub) {
      res.status(200).json({ message: "Club deleted successfully" });
    } else {
      res.status(404).json({ error: "Club not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete Club" });
  }
};

module.exports = {
  createClub,
  getAllClubs,
  getClubById,
  updateClubById,
  deleteClubById,
};
