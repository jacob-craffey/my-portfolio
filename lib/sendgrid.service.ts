import sgMail, { MailDataRequired, ResponseError } from "@sendgrid/mail";

type SendEmailResponse = { success: boolean; error?: ResponseError };

export class SendGridService {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
  }

  async getStaticProps(email: MailDataRequired): Promise<SendEmailResponse> {
    try {
      await sgMail.send(email);
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false, error: error as ResponseError };
    }
  }
}
