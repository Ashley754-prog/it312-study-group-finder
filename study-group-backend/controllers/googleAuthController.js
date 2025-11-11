import { OAuth2Client } from "google-auth-library";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleAuth = async (req, res) => {
  try {
    const { idToken } = req.body;
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const email = payload.email;
    const googleId = payload.sub;
    const username = payload.given_name || payload.name || email.split("@")[0];

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ username, email, googleId });
      await user.save();
    } else {
      if (!user.googleId) {
        user.googleId = googleId;
        await user.save();
      }
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
  } catch (err) {
    console.error("Google auth error:", err);
    res.status(400).json({ message: "Google authentication failed" });
  }
};
