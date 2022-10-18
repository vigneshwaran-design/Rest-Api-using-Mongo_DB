import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const url =
  "mongodb+srv://Vigneshwaran:Vignesh%405595@usingexpress.kd52aaw.mongodb.net/mernapp?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MONGODB Connected:${conn.connection.host}`.cyan.underline);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export default connectDB;
