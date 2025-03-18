import { Controller, Get, Query } from '@nestjs/common';
import { LlmService } from './llm.service';

@Controller('llm')
export class LlmController {
  constructor(private readonly llmService: LlmService) {}

  @Get('query')
  async getLlmResponse(@Query('message') message: string) {
    if (!message) {
      return { error: 'Message query parameter is required' };
    }

    return this.llmService.getLLMData(message);
  }
}