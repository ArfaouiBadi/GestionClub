const mongoose = require("mongoose")

const salleSchema = new mongoose.Schema(
    {
        name: {
          type: "String",
          required: true,
          unique: true
        },
        capacity: {
          type: "Number",
          required: true
        },
        location: {
          type: "String",
          required: true
        },
        available: {
          type: "Boolean",
          required: true
        },
        description: {
          type: "String"
        }
      }
      
)

const Salle = mongoose.model("categories", salleSchema)

module.exports = Salle