import { Controller, Get } from '@nestjs/common';

// controller raiz

@Controller()
export class AppController {
  @Get('ping')
  ping(): string {
    return 'pong';
  }
}


