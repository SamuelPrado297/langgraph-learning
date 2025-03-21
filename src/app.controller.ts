import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('agent')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ask')
  async ask(@Query('q') message: string): Promise<string> {
    return this.appService.executeTask(message)
  }
}
