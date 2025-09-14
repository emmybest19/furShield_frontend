
const mongoose = require('mongoose');

const AttachmentSchema = new mongoose.Schema({
    url: String,
    mimeType: String,
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    uploadedAt: { type: Date, default: Date.now }
},{ _id: false });

const HealthRecordSchema = new mongoose.Schema({
    pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
    vet: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    visitDate: { type: Date, required: true },
    diagnosis: String,
    treatment: String,
    followUpDate: Date,
    attachments: [AttachmentSchema],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, { timestamps: true });

module.exports = mongoose.model('HealthRecord', HealthRecordSchema);