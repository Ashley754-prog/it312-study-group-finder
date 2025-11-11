import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import passwordRoutes from "./routes/passwordRoutes.js";
import connectDB from "./config/db.js";
import googleRoutes from "./routes/googleRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/password", passwordRoutes);
app.use("/api/auth", googleRoutes); 

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB!");
  app.listen(5000, () => console.log("Server running on port 5000."));
})
.catch((err) => console.log(err));
