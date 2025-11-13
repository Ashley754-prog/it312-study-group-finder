import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import { pool } from "../config/db.js";
import { sendEmail } from "../utils/sendEmail.js";
import { isAllowedWMSUEmail } from "../utils/validateWMSUEmail.js"; // ✅ import validation

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

    if (!email.endsWith("@wmsu.edu.ph")) {
      return res.status(400).json({ message: "Only WMSU emails are allowed." });
    }

    if (!isAllowedWMSUEmail(email)) {
      return res.status(400).json({ message: "WMSU email not allowed (outside 5-year limit or invalid format)." });
    }

    let username = payload.name || email.split("@")[0];
    const nameParts = username.trim().split(" ");
    username = nameParts[1] || nameParts[0];
    username = username.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    if (username.length > 0) {
      username = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
    }

    const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    let user;

    if (users.length === 0) {
      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

      const [result] = await pool.query(
        "INSERT INTO users (username, email, google_id, is_verified, verification_code) VALUES (?, ?, ?, false, ?)",
        [username, email, googleId, verificationCode]
      );

      user = { id: result.insertId, username, email };

      const resetURL = `http://localhost:5173/verify?email=${encodeURIComponent(email)}`;
      const message = `
        <h3>Verify your WMSU email</h3>
        <p>Hi ${username}! Your verification code is:</p>
        <h2>${verificationCode}</h2>
        <p>Click the link below to go to the verification page and enter your code:</p>
        <a href="${resetURL}" target="_blank">Verify Account</a>
        <p>This code expires in 10 minutes.</p>
      `;
      await sendEmail(email, "Verify Your Study Squad Account", message);
      console.log(`✅ Verification email sent to: ${email}`);
    } else {

      user = users[0];
      if (!user.google_id) {
        await pool.query("UPDATE users SET google_id = ? WHERE id = ?", [googleId, user.id]);
      }
      user.username = user.username.split(" ")[0];
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
  } catch (err) {
    console.error("Google auth error:", err);
    res.status(400).json({ message: "Google authentication failed" });
  }
};
