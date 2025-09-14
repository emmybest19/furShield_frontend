
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Appointment = require('../models/Appointment');

// Create a new appointment
router.post('/', auth, async (req, res) => {
    try {
        const { pet, vet, appointmentTime, reason } = req.body;
        const appointment = new Appointment({
            pet,
            owner: req.user._id,
            vet,
            appointmentTime,
            reason
        });
        await appointment.save();
        res.status(201).json(appointment);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

// Get appointments (filter by owner or vet)
router.get('/', auth, async (req, res) => {
    try {
        const filter = {};
        if (req.user.role === 'owner') {
            filter.owner = req.user.id;
        } else if (req.user.role === 'vet') {
            filter.vet = req.user.id;
        }
        const appointments = await Appointment.find(filter).populate('pet', 'name species').populate('owner', 'name email').populate('vet', 'name email');
        res.json({ success: true, data: appointments});
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Update appointment status (vet/admin only)
router.put('/:id/status', auth, async (req, res) => {
    try {
        if (req.user.role !== 'vet' && req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Not authorized' });
        }
        const { status } = req.body;
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        appointment.status = status || appointment.status;
        await appointment.save();
        res.json(appointment);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

module.exports = router;
