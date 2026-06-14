import { eMessages } from "../enums";
import {
  INotificationFactory,
  IResponse,
} from "../interfaces/INotificationFactory";

interface ISmsResponse {
  from: string;
  to: string;
  sentAt: string;
  message: string;
}

export class SmsNotification implements INotificationFactory<ISmsResponse> {
  send(): IResponse<ISmsResponse> {
    // Do something

    return {
      message: eMessages.SUCCESS,
      code: 200,
      data: {
        from: "",
        to: "",
        sentAt: "",
        message: "",
      },
    };
  }
}
