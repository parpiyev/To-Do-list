const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    country_code: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
    }
});

const Country = mongoose.model('Country', countrySchema);

exports.Country = Country;