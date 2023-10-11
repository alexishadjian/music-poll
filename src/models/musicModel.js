const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

let musicSchema = new Schema ({
    url: {
        type: String,
        required: "Url is required"
    },
    lastname: {
        type: String,
        required: "Last name is required"
    },
    firstname: {
        type: String,
        required: "First name is required"
    },
    email: {
        type: String,
        required: "Email is required",
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Music', musicSchema);