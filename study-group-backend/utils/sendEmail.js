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
      html,
    };

    const res = await sgMail.send(msg);
    console.log("✅ Email sent to:", to, "| Status:", res[0].statusCode);
    return res;
  } catch (err) {
    console.error("❌ SendGrid error:", err?.response?.body || err);
    throw new Error("Failed to send email. Check SendGrid logs.");
  }
};
