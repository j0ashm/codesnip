const mongoose = require('mongoose');

const snipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = mongoose.model('Snips', snipSchema)