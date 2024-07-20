import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { userDto } from './Dto/users';
import { Iresponse } from './interface/response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('create_user')
  async saveUser(user: userDto): Promise<Iresponse> {
    try {
      const result = await this.appService.saveUser(user);

      return result;
    } catch (error) {
      return {
        message: 'Error creating user',
        status: false,
      };
    }
  }
}
