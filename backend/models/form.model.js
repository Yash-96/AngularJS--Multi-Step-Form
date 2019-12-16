const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FormSchema = new Schema({
    fname: {type: String},
    lname: {type: String},
    gender: {type: String},
    dob: {type: String},
    loc: {type: String},
    nationality: {type: String},
    sports: {type: [String]},
    ass: {type: String},
    team: {type: String},
    abt: {type: String},
    interests: {type: String},
    charities: {type: String},
    pets: {type: String},
    alcohol: {type: String},
    marraige: {type: String},
    facebook: {type: String},
    twitter: {type: String},
    instagram: {type: String},
    youtube: {type: String},
    twitch: {type: String},
    snapchat: {type: String},
});


// Export the model
module.exports = mongoose.model('Form', FormSchema);