const mongoose = require('mongoose');
const propertySchema = new mongoose.Schema(
    {
        name: String,
        address: String,
        Suburb: String,
        District: String,
        Value: Number,
        Bathrooms: Number,
        Bedrooms: Number,
        Garages: Number,
        PetFriendly: Boolean,
        Rent: Number,
        ImageURI: String
    }
);
const Properties = mongoose.model('Properties', propertySchema);
module.exports = Properties;