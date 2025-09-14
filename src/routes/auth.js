
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register a new user
router.post('/register', async (req, res) =>{
    try{
        const { name, email, password, role } = req.body;
        if(!name || !email || !password){
            return res.status(400).json({ success: false, error: 'Name, email and password are required' });
        }

        const existing = await User.findOne({ email });
        if(existing){
            return res.status(400).json({ success: false, error: 'Email already in use' });
        }

        const user = new User({ name, email, role: role || 'owner' });
        await user.setPassword(password);
        await user.save();

        const token = jwt.sign({ sub: user.id.toString(), role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '1d' });
        res.status(201).json({ success: true, data: { token, user: user.toJSON()}});
    }
    catch(e){
        console.error(e);
        res.status(500).json({ success: false, error: e.message });
    }
});



// Login 
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({ success: false, error: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if(!user) return res.status(401).json({ success: false, error: 'Invalid credentials' });

        const ok = await user.verifyPassword(password);
        if(!ok) return res.status(401).json({ success: false, error: 'Invalid credentials' });

        const token = jwt.sign({ sub: user.id.toString(), role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '1d' });
        res.json({ success: true, data: { token, user: user.toJSON() } });
    }
    catch(e){
        console.error(e);
        res.status(500).json({ success: false, error: e.message });
    }
});

module.exports = router;