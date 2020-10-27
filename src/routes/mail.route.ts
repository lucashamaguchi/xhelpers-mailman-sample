import * as Boom from "@hapi/boom";

import BaseRouteSimple from "xhelpers-api/lib/base-route-simple";
import MailService from "../services/mail.service";
import { mailPayload } from "./schemas/mail.schemas";

const httpResourcePath = "mails";

class Routes extends BaseRouteSimple {
  service: MailService;
  constructor() {
    super();
    this.service = new MailService();

    this.route("POST", `/api/${httpResourcePath}`, {
      description: "Send new email using the payload information",
      tags: ["api", "mail"],
    })
      .validate({ payload: mailPayload })
      .handler(async (r, h, u) => {
        const entity = await this.service.dispatchMail(u, r.payload as any);
        if (!entity) throw Boom.notFound();
        return h.response(entity).code(200);
      })
      .build();
  }
}
module.exports = [...new Routes().buildRoutes()];
