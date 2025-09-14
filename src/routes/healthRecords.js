
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const HealthRecord = require('../models/HealthRecord');

// Create a new health record
router.post('/', auth, async (req, res) => {
    try {
        const { pet, vet, visitDate, diagnosis, treatment, followUpDate, attachments } = req.body;

        // Only vets or admins can create health records
        if (req.user.role !== 'vet' && req.user.role !== 'admin') {
            return res.status(403).json({ success: false, error: 'Only vets can add health records' });
        }

        const record = new HealthRecord({
            pet,
            vet: vet || req.user.id,
            visitDate,
            diagnosis,
            treatment,
            followUpDate,
            attachments: attachments || [],
            createdBy: req.user.id
        });

        await record.save();
        res.status(201).json({ success: true, data: record.toJSON() });
    } catch (e) {
        console.error(e);
        res.status(500).json({ success: false, error: e.message });
    }
});

// Get health records (Owners see their pets' records, vets/admins see all)
router.get('/pet/:petId', auth, async (req, res) => {
    try {
        const { pet, page = 1, limit = 20 } = req.query;
        const filter = {};
        
        if (pet) filter.pet = pet;

        // Owners can only see records of their pets
        if (req.user.role === 'owner') {
            const petsOwned = await require('../models/Pet').find({ owner: req.user.id }).select('_id');
            filter.pet = { $in: petsOwned.map(p => p._id) };
        }

        const records = await HealthRecord.find(filter)
            .skip((page - 1) * limit)
            .limit(parseInt(limit, 10))
            .populate('pet', 'name species')
            .populate('vet', 'name email')
            .populate('createdBy', 'name email');

        res.json({ success: true, data: records });
    } catch (e) {
        console.error(e);
        res.status(500).json({ success: false, error: e.message });
    }
});

module.exports = router;