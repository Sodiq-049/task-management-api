const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./utils/errorHandler');

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // Parse JSON bodies
app.use('/api/tasks', taskRoutes); // Task routes
app.use(errorHandler); // Error handling middleware

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});