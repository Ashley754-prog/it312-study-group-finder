import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async (to, subject, html) => {
  try {
  const msg = {
    to,
    from: {
      email: "studtech1234@gmail.com",
      name: "Crimsons Study Squad",
    },
    subject,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color:#800000;">Crimsons Study Squad</h2>
        <p>Hi there,</p>
        <p>You requested to reset your password for your Study Squad account.</p>
        <p>Click the button below to continue:</p>
        <a href="${resetURL}"
          style="background-color:#800000;color:white;padding:10px 20px;text-decoration:none;border-radius:6px;">
          Reset Password
        </a>
        <p>If you didn't request this, you can safely ignore this message.</p>
        <p style="font-size:0.9em;color:#555;">© 2025 Crimsons Study Squad | Western Mindanao State University</p>
      </div>
    `,
  };
    const res = await sgMail.send(msg);
    console.log("SendGrid response:", res[0].statusCode);
    return res;
  } catch (err) {
    console.error("SendGrid error:", err?.response?.body || err);
    throw new Error("Failed to send email. Check server logs.");
  }
};
export default sendEmail;
