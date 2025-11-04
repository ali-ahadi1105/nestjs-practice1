import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  getHello(): string {
    const environment = this.configService.get<string>('environment');
    console.log(environment);
    return 'Hello World!';
  }
}
