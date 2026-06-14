import { eMessages } from "../enums";
import { INotification, IResponse } from "../interfaces/INotificationFactory";

interface IEmailResponse {
  from: string;
  to: string;
  sentAt: string;
  message: string;
}

export class EmailNotification implements INotification<IEmailResponse> {
  send(): IResponse<IEmailResponse> {
    // Do something

    return {
      message: eMessages.SUCCESS,
      code: 200,
      data: {
        from: "nam.nguyen@conarum.com",
        to: "stghoainam4002@gmail.com",
        sentAt: "122323",
        message: "Learn Factory pattern",
      },
    };
  }
}
