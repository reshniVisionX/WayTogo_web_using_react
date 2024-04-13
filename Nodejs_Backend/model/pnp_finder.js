
const mongoose = require('mongoose');

const pnpSchema = new mongoose.Schema({
    province: String,
    category: String,
    expressEntryLinked: String,
    jobOfferRequired: String,
});

const PNPDataModel = mongoose.model('canadaterritories', pnpSchema);

module.exports = PNPDataModel;

