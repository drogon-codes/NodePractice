//Mongoose model for products with image
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    token: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);