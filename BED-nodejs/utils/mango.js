// utils/mongo.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/digital-mata';

export const connectMongo = async () => {
  try {
    await mongoose.connect(mongoUri); // options not needed in Mongoose v8+
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1); // exit if DB connection fails
  }
};

export default mongoose;