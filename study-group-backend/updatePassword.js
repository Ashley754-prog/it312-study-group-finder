import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "./models/User.js"; 

dotenv.config();

const updatePassword = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const email = "hz202300368@wmsu.edu.ph"; 
    const newPassword = "Ashley_12345!!"; 

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const user = await User.findOneAndUpdate(
      { email },
      { password: hashedPassword },
      { new: true }
    );

    if (user) {
      console.log("✅ Password updated successfully for:", email);
    } else {
      console.log("❌ User not found!");
    }

    mongoose.disconnect();
  } catch (err) {
    console.error("⚠️ Error:", err);
  }
};

updatePassword();
