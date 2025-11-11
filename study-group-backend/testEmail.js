import dotenv from "dotenv";
dotenv.config();
import { sendEmail } from "./utils/sendEmail.js";

const test = async () => {
  try {
    await sendEmail("your-target@example.com", "Test", "<p>Test email</p>");
    console.log("✅ Test email sent successfully!");
  } catch (err) {
    console.error("❌ Test email failed:", err.message || err);
  }
};

test();
