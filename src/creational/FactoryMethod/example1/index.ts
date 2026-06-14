import { EmailNotification } from "./classes/MailNotification";
import { SmsNotification } from "./classes/SmsNotification";
import { eNotificationType } from "./enums";

export class NotificationFactory {
  static create(type: string) {
    if (type == eNotificationType.EMAIL) return new EmailNotification();
    if (type == eNotificationType.SMS) return new SmsNotification();
  }
}

const emailNoti = NotificationFactory.create(eNotificationType.SMS);

console.log(emailNoti?.send());
