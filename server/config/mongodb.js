import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/imagifyyyyy`);
    
    mongoose.connection.on('connected', () => {
      console.log('MongoDB connected');
    });
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1); // stop the server
  }
};

export default connectDB;
