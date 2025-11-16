import { Injectable } from '@nestjs/common';
import { LoggerService } from './core/logger/logger.service';

@Injectable()
export class AppService {
  private context = 'AppService';
  constructor(private readonly logger: LoggerService) {}
  getHello(): string {
    this.logger.log('Hello from getHello method :)', this.context, {
      userId: 123,
      job: 'web-developer',
    });
    return 'Hello World!';
  }
}
