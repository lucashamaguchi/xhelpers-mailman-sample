import * as Joi from "@hapi/joi";

export enum MailType {
  ConfirmEmail = "ConfirmEmail",
  ForgotPassword = "ForgotPassword",
}

export const mailPayload = Joi.object({
  email: Joi.string().email().max(256).required().description("Email"),
  type: Joi.string()
    .required()
    .valid(
      MailType.ConfirmEmail,
      MailType.ForgotPassword,
    )
    .allow(MailType)
    .description("Type of the email to be sent"),
  data: Joi.object().required().description("Data object used by sendgrid"),
})
  .label("mailPayload")
  .description("Mail New");
