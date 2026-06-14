import { EmailNotification } from "./example1/classes/MailNotification";
import { SmsNotification } from "./example1/classes/SmsNotification";
import { eNotificationType } from "./example1/enums";

export class NotificationFactory {
  static create(type: string) {
    if (type == eNotificationType.EMAIL) return new EmailNotification();
    if (type == eNotificationType.SMS) return new SmsNotification();
  }
}

const emailNoti = NotificationFactory.create(eNotificationType.SMS);

console.log(emailNoti?.send());
