
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
    phone: { type: String },
    role: { type: String, enum: ['owner', 'veterinarian', 'shelter', 'admin'], default: 'owner' },
    address: { type: String },
    isVerified: { type: Boolean, default: false },
    meta: { type: mongoose.Schema.Types.Mixed }
}, { timestamps: true });

UserSchema.methods.verifyPassword = function(password) {
    return bcrypt.compare(password, this.passwordHash);
};

UserSchema.methods.setPassword = async function(password) {
    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || '12', 10);
    this.passwordHash = await bcrypt.hash(password, saltRounds);
};

UserSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
        delete ret.passwordHash;
        return ret;
    }
});

module.exports = mongoose.model('User', UserSchema);