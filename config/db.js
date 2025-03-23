const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
    try {
        // Connect to MongoDB using the connection string from the .env file
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, // This option is deprecated but can be kept for now
            useUnifiedTopology: true, // This option is also deprecated but can be kept for now
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;