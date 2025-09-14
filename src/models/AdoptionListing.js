
const mongoose = require('mongoose');

const AdoptionListingSchema = new mongoose.Schema({
    shelter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet'},
    petSnapshot: {
        name: String,
        age: Number,
        breed: String,
        species: String,
    },
    description: String,
    status: {
        type: String,
        enum: ['available', 'pending', 'adopted'],
        default: 'available'
    }
}, { timestamps: true });

module.exports = mongoose.model('AdoptionListing', AdoptionListingSchema);