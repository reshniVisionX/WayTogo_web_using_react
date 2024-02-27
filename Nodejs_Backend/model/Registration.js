const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    salutation: String,
    name: String,
    email: {
        type: String,
        unique: true 
    },
    password: String,
    phone: String,
    dob: Date,
    gender: String,
    address: String,
    state: String,
    city: String,
    country: String,
    registeredAt: {
        type: Date,
        default: Date.now 
       }
}, {
    collection: 'registration' 
});

mongoose.model("registration", formSchema);
