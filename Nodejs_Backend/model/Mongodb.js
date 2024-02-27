const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoUrl = "mongodb+srv://reshni:root@democlusterdb.4srqjmw.mongodb.net/Immigrants_db";
        await mongoose.connect(mongoUrl);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); 
    }
};
module.exports = connectDB;
