import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('user_created')
  async sendEmail(email: string): Promise<void> {
    const result = await this.appService.sendEmail(email);
    console.log(result);
  }
}
