import { Inject, Injectable } from '@nestjs/common';
import { userDto } from './Dto/users';
import { appendFile } from 'fs/promises';
import * as path from 'path';
import { Iresponse } from './interface/response';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('EMAIL_SERVICE') private readonly emailClient: ClientProxy,
  ) {}
  async saveUser(user: userDto): Promise<Iresponse> {
    const pathFile = path.join(__dirname, '../users.txt');

    const userSerial = JSON.stringify(user);

    await appendFile(pathFile, userSerial, 'utf-8');

    this.emailClient.emit('user_created', user.email);

    return { message: 'user created', status: true };
  }
}
