import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendTestEmail = async () => {
  try {
    const msg = {
      to: "your_email_here@gmail.com", 
      from: process.env.EMAIL_FROM,    
      subject: "Test Email from Study Group App",
      text: "This is a test email to check SendGrid setup.",
      html: "<p>This is a <strong>test email</strong> to check SendGrid setup.</p>",
    };

    await sgMail.send(msg);
    console.log("Test email sent successfully!");
  } catch (err) {
    console.error("Error sending test email:", err.response ? err.response.body : err.message);
  }
};

sendTestEmail();
