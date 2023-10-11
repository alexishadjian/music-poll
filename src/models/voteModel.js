const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let voteSchema = new Schema ({
    number: {
        type: Number,
        min: [1, 'Number mustn\'t be less than 1'],
        max: [5, 'Number mustn\'t be greater than 5 '],
        required: "Rating is required"
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    music_id: {
        type: String
    }
})

module.exports = mongoose.model('Vote', voteSchema);