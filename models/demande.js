const mongoose = require("mongoose");

const demandeSchema = new mongoose.Schema({
    materials: [mongoose.Schema.Types.Mixed],
    idUser: {
        type: String,
        required: true
    },
    materials: {
        type: Array,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    club: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    details: {
        type: String,
        required: true
    }
});

const Demande = mongoose.model("Demande", demandeSchema);
module.exports = Demande;
