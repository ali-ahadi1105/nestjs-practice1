import { Injectable } from '@nestjs/common';
import { LoggerService } from './core/logger/logger.service';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  private context = 'AppService';
  constructor(
    private readonly logger: LoggerService,
    private readonly databaseService: DatabaseService
  ) {}
  getHello(): string {
    this.logger.log('Hello from getHello method :)', this.context, {
      userId: 123,
      job: 'web-developer',
    });
    this.databaseService.user.findMany();
    return 'Hello World!';
  }
}
