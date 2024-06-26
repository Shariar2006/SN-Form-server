const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    uEmail: {
        type: String
    },
    uName: {
        type: String
    },
    uPhoto: {
        type: String,
        Default: 'no photo'
    },
    role: {
        type: String,
        Default: 'user'
    },
});

const UserData = model('users', UserSchema);

module.exports = UserData