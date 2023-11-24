const mongoose = require("mongoose")

const clubSchema = new mongoose.Schema(
    {
        phone: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique:true
        },
        clubName: {
            type: String,
            required: true,
            unique:true
        },
        logoClub: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
)

const club = mongoose.model("clubs", clubSchema)

module.exports = club