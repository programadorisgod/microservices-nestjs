import { Body, Controller, Inject, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  @Post('/users')
  async saveUser(
    @Res() res: Response,
    @Body() userDto: Record<string, unknown>,
  ) {
    this.userClient
      .send<Record<string, unknown>>('create_user', {
        email: userDto.email,
        name: userDto.name,
        password: userDto.password,
      })
      .subscribe({
        next: (value) => res.status(201).send(value),
        error: (err) => res.status(500).send(err),
      });
  }
}
