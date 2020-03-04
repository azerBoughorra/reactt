const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const guestHouseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    disponibility: {
        type: Boolean,
        default: Date.now
    }


});

module.exports = guestHouse = mongoose.model("guestHouse", guestHouseSchema);
