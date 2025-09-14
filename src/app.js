require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connect } = require('./db');

const authRoutes = require('./routes/auth');
const petsRoutes = require('./routes/pets');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/pets', petsRoutes);

app.get('/', (req, res) => res.json({ success: true, message: 'Welcome to FurShield API' }));

const PORT = process.env.PORT || 5000;
connect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});