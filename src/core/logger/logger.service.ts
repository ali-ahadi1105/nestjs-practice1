/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Injectable, LoggerService as NestLogger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as winston from 'winston';

@Injectable()
export class LoggerService implements NestLogger {
  private logger: winston.Logger;

  constructor(private readonly configService: ConfigService) {
    const isDevelopment =
      this.configService.get('environment') === 'development';

    const { combine, json, timestamp, colorize, printf } = winston.format;

    const logFormat = isDevelopment
      ? combine(
          colorize(),
          timestamp(),
          printf(({ level, context, message }) => {
            return `${level} [${context}] ${message}`;
          }),
        )
      : combine(timestamp(), json());

    this.logger = winston.createLogger({
      format: logFormat,
      transports: [new winston.transports.Console()],
    });
  }

  log(message: string) {
    this.logger.info(message);
  }
  error(message: string) {
    this.logger.error(message);
  }
  warn(message: string) {
    this.logger.warn(message);
  }
}
