import crypto from "crypto";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { sendEmail } from "../utils/sendEmail.js";

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "No user found with this email" });
    }

    if (!user.password) {
      return res.status(200).json({
        message: "This is a Google account – reset your password via Google Sign-In."
      });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenHash = crypto.createHash("sha256").update(resetToken).digest("hex");

    user.resetPasswordToken = resetTokenHash;
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000; 

    const resetURL = `http://localhost:5173/reset-password/${resetToken}`;
    const message = `
      <h3>Password Reset Request</h3>
      <p>Click below to reset your password:</p>
      <a href="${resetURL}" target="_blank">Reset Password</a>
      <p>This link expires in 10 minutes.</p>
    `;

    await sendEmail(email, "Reset Your Password", message);

    res.json({ message: "Password reset email sent!" });
  } catch (err) {
    console.error("Forgot Password Error:", err);
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
};

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      resetPasswordToken: tokenHash,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.json({ message: "Password updated successfully!" });
  } catch (err) {
    console.error("Reset Password Error:", err);
    res.status(500).json({ message: err.message || "Server error" });
  }
};
