import * as sgMail from "@sendgrid/mail";

import { MailType } from "../routes/schemas/mail.schemas";

export default class MailService {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async dispatchMail(
    user: any,
    payload: {
      email: string;
      type: MailType;
      data: any;
    }
  ) {
    const message = {
      to: payload.email,
      from: process.env.FROM,
      templateId: this.getTemplateId(payload.type),
      dynamic_template_data: payload.data,
    };

    let emailResponse = {};
    try {
      emailResponse = await sgMail.send(message);
    } catch (e) {
      // tslint:disable-next-line: no-console
      console.error(`Error to send mail: ${e}`);
      if (e.response) {
        // tslint:disable-next-line: no-console
        console.error(e.response.body);
      }
    }

    return {
      email: payload.email,
      type: payload.type,
      ...emailResponse,
    };
  }

  getTemplateId(type: MailType) {
    switch (type) {
      case MailType.ConfirmEmail:
        return process.env.TEMPLATE_ID_CONFIRM_EMAIL;
      case MailType.ForgotPassword:
        return process.env.TEMPLATE_ID_FORGOT_PASSWORD;
      default:
        break;
    }
    return "";
  }
}
