const mongoose = require('mongoose');
const url = process.env.MONGO_URI || 'mongodb://localhost:27017/furshield';

async function connect() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    }
    catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
}

module.exports = { connect, mongoose };