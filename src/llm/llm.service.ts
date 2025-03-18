import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LlmService {
  private readonly logger = new Logger(LlmService.name);
  private readonly apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
  private readonly apiKey = process.env.OPENROUTER_API_KEY; // Load API key from .env

  async getLLMData(prompt: string): Promise<string> {
    try {
      const response = await axios.post(
        this.apiUrl,
        {
          model: 'openai/gpt-4o',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 500,  // Lower token usage to avoid hitting the limit
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Log full response for debugging
      this.logger.log(`OpenRouter API Response: ${JSON.stringify(response.data)}`);

      // Ensure choices exist before accessing them
      if (!response.data.choices || response.data.choices.length === 0) {
        throw new HttpException(
          'Invalid response from OpenRouter API',
          HttpStatus.BAD_GATEWAY
        );
      }

      return response.data.choices[0]?.message?.content || 'No response received';
    } catch (error) {
      this.logger.error('OpenRouter API Error:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });

      throw new HttpException(
        `LLM API error: ${error.response?.data?.error || error.message}`,
        HttpStatus.BAD_GATEWAY
      );
    }
  }
}