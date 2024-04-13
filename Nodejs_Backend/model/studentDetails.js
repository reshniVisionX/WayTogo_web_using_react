const mongoose = require("mongoose");

const studentDetails = new mongoose.Schema({

    number: {
        type: Number,
        required: true,
    },
    email: { 
        type: String,
         required: true,
          unique: true },
    password: {
        type: String,
        required: true,
    },

},{
    collection : "student",
}
);

mongoose.model("student",studentDetails);