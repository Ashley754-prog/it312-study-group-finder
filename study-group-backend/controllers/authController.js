import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export const createAccount = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    const token = generateToken(newUser._id);

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: { id: newUser._id, username: newUser.username, email: newUser.email },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    if (!user.password) return res.status(400).json({ message: "Use Google Sign-In" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user._id);

    res.status(200).json({
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const googleAuth = async (req, res) => {
  try {
    const { idToken } = req.body;

    if (!idToken) return res.status(400).json({ message: "No ID token provided" });

    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    console.log("Google payload:", payload);

    const email = payload.email;
    const username = payload.name || email.split("@")[0]; 
    const googleId = payload.sub;

    if (!email) return res.status(400).json({ message: "Google account has no email" });

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ username, email, googleId });
      await user.save();
    }

    const token = generateToken(user._id);

    res.status(200).json({
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (err) {
    console.error("Google Auth Error:", err);
    res.status(500).json({ message: "Google authentication failed", error: err.message });
  }
};


