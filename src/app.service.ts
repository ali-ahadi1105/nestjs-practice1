import { Injectable } from '@nestjs/common';
import { LoggerService } from './core/logger/logger.service';
import { CacheService } from './core/cache/cache.service';

@Injectable()
export class AppService {
  private context = 'AppService';
  constructor(
    private readonly logger: LoggerService,
    private readonly cacheService: CacheService
  ) {}
  async getHello(): Promise<string> {
    this.logger.log('Hello from getHello method :)', this.context, {
      userId: 123,
      job: 'web-developer',
    });
    await this.cacheService.set('key', 'value');
    const value = await this.cacheService.get('key');
    console.log('value is: ', value);
    return 'Hello World!';
  }
}
