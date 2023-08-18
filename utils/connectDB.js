import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  mongoose.connect(process.env.MONGO_URI);
  console.log("Connected");
};

export default connectDB;
