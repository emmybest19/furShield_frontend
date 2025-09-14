
const mongoose = require('mongoose');

const PetImageSchema = new mongoose.Schema({
    url: String,
    alt: String,
    isPrimary: { type: Boolean, default: false }
},{ _id: false });

const PetSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    species: { type: String, required: true },
    breed: { type: String },
    dob: { type: Date},
    gender: { type: String, enum: ['Male', 'Female', 'Unkwown'], default: 'Unknown' },
    notes: { type: String },
    images: [PetImageSchema]
}, { timestamps: true });

PetSchema.virtual('age').get(function() {
    if (!this.dob) return null;
    const diff = Date.now() - this.dob.getTime();
    return Math.floor(diff / (365.25*24*60*60*1000));
});

PetSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

module.exports = mongoose.model('Pet', PetSchema);