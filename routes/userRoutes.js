const express = require("express");
const bcrypt=require("bcrypt")
const { login, register } = require("../controller/userController");
const { verifyTokenAndAuthorization,verifyTokenAndAdmin } = require("./verifyToken");
const router = express.Router();

//login
router.post("/login", login);
//signe up
router.post("/register", register);

const UserModel = require('../models/user')

router.put("/:id", async (req, res) => {
    console.log("hello");   
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password,10)
    }
    
    try {
        
      const updatedUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
        
      );
      
      res.status(200).json("User has been Updated...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      console.log(req.params.id)
      await UserModel.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET USER
router.get("/find/:id", async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);
      console.log(user)
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET ALL USER
router.get("/", async (req, res) => {
  
    try {
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET USER STATS
  



module.exports = router;
