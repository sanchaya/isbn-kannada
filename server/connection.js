const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const uri='mongodb://localhost:27017/search'
const connectDB = async () => {
  try {
  
    await mongoose.connect(uri);
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1); // Exit the process if unable to connect to the database
  }
};

module.exports = connectDB;