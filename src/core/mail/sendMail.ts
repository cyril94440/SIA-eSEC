import { MailContent, MailResponse } from "./types";
import nodemailer from "nodemailer";
import Transport from "nodemailer-brevo-transport";

export const sendMail = async (mailContent: MailContent): Promise<MailResponse> => {
  const { NODEMAILER_EMAIL, NODEMAILER_PASSWORD, NODE_ENV, EMAIL_ADDRESS_DEBUG, BREVO_API_KEY } = process.env;

  let transporter : nodemailer.Transporter;
  if(BREVO_API_KEY){
    transporter = nodemailer.createTransport(
      new Transport({ apiKey: BREVO_API_KEY })
  );
  }else{
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: NODEMAILER_EMAIL,
        pass: NODEMAILER_PASSWORD,
      },
    });
}

  const mailOptions = {
    from: NODEMAILER_EMAIL,
    to: NODE_ENV === "development" ? EMAIL_ADDRESS_DEBUG : mailContent.toEmail,
    subject: mailContent.subject,
    text: mailContent.text,
    html: mailContent.html,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "An error occurred while attempting to send email" };
  }
};
