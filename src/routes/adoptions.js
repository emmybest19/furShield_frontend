
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const AdoptionListing = require('../models/AdoptionListing');

// Create a new adoption listing (Shelters/Admins only)
router.post('/', auth, async (req, res) =>{
    try{
        if(req.user.role !== 'shelter' && req.user.role !== '')
    }
});
