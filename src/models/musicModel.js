const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let musicSchema = new Schema ({
    url: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: "Le contenu est requis"
    },
    firstName: {
        type: String,
        required: "Le contenu est requis"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Music', musicSchema);