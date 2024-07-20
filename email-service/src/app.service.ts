import { Injectable } from '@nestjs/common';
import { html } from './utils/template';
import { transporter } from './config/nodemail.config';
import { date } from './utils/date';

@Injectable()
export class AppService {
  async sendEmail(email: string): Promise<string> {
    const emailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: `No responder, información registro ${date()}`,
      html,
    };
    await transporter.sendMail(emailOptions);
    return `Sent email to: ${email}`;
  }
}
