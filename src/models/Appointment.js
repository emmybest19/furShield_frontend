
const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    vet: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    appointmentTime: { type: Date, required: true },
    durationMinutes: { type: Number, default: 30 },
    status: {
        type: String,
        enum: ['requested', 'approved', 'rescheduled', 'cancelled', 'completed'],
        default: 'requested'
    },
    reason: String,
    notes: String,
},{ timestamps: true});

module.exports = mongoose.model('Appointment', AppointmentSchema);