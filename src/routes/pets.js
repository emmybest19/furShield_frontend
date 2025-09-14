
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Pet = require('../models/Pet');
const User = require('../models/User');

// Create a new pet(Owners Only)
router.post('/', auth, async (req, res) => {
    try{
        if (req.user.role !== 'owner' && req.user.role !== 'admin') {
            return res.status(403).json({ success: false, error: 'Only owners can add pets' });
        }
        const data = req.body;
        const pet = new Pet({ ...data, owner: req.user.id });
        await pet.save();
        res.status(201).json({ success: true, data: pet.toJSON() });
    }
    catch(e){
        console.error(e);
        res.status(500).json({ success: false, error: e.message });
    }
});

// List Pets (Owners see their pets, vets/shelters/admins see all)
router.get('/', auth, async (req, res) => {
   try{
    const { page = 1, limit = 20, owner } = req.query;
    const q = {};
    if(owner) q.owner = owner;
    const pets = await Pet.find(q).skip((page - 1) * limit).limit(parseInt(limit, 10)).populate('owner', 'name email');
    res.json({ success: true, data: pets });
   }
   catch(e){
    console.error(e);
    res.status(500).json({ success: false, error: e.message });
   }
});

// Get Pet Details
router.get('/:id', auth, async (req, res) => {
    try{
        const pet = await Pet.findById(req.params.id).populate('owner', 'name email');
        if(!pet) return res.status(404).json({ success: false, error: 'Pet not found' });
        res.json({ success: true, data: pet });
    }
    catch(e){
        console.error(e);
        res.status(500).json({ success: false, error: e.message });
    }
});

// Update Pet (Only owner or admin)
router.put('/:id', auth, async (req, res) => {
    try{
        const pet = await Pet.findById(req.params.id);
        if(!pet) return res.status(404).json({ success: false, error: 'Pet not found' });
        if(pet.owner.toString() !== req.user.id && req.user.role !== 'admin'){
            return res.status(403).json({ success: false, error: 'Not authorized to update this pet' });
        }
        Object.assign(pet, req.body);
        await pet.save();
        res.json({ success: true, data: pet });
    }
    catch(e){
        console.error(e);
        res.status(500).json({ success: false, error: e.message });
    }
});

// Delete Pet (Only owner or admin)
router.delete('/:id', auth, async (req, res) => {
    try{
        const pet = await Pet.findById(req.params.id);
        if(!pet) return res.status(404).json({ success: false, error: 'Pet not found' });
        if(pet.owner.toString() !== req.user.id && req.user.role !== 'admin'){
            return res.status(403).json({ success: false, error: 'Not authorized to delete this pet' });
        }
        await pet.remove();
        res.json({ success: true, message: 'Pet deleted' });
    }
    catch(e){
        console.error(e);
        res.status(500).json({ success: false, error: e.message });
    }
});

module.exports = router;
