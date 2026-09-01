import OpenAI from 'openai';

export class CodeGenerator {
  private client: OpenAI;
  private model: string;
  private temperature: number;

  constructor() {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY environment variable is not set');
    }

    this.client = new OpenAI({ apiKey });
    this.model = process.env.MODEL || 'gpt-4';
    this.temperature = parseFloat(process.env.TEMPERATURE || '0.7');
  }

  async generate(prompt: string, language: string = 'typescript'): Promise<string> {
    const systemPrompt = `You are an expert code generator. Generate clean, efficient, and well-documented ${language} code.
    Always follow best practices and include comments where necessary.`;

    const message = await this.client.messages.create({
      model: this.model,
      max_tokens: 2048,
      messages: [
        {
          role: 'user',
          content: `${systemPrompt}\n\nGenerate ${language} code for: ${prompt}`,
        },
      ],
    });

    const content = message.content[0];
    if (content.type === 'text') {
      return content.text;
    }

    throw new Error('Unexpected response format from API');
  }

  async generateWithLanguage(
    prompt: string,
    language: string
  ): Promise<string> {
    return this.generate(prompt, language);
  }

  async generateMultiple(
    prompts: string[],
    language: string = 'typescript'
  ): Promise<string[]> {
    return Promise.all(
      prompts.map((prompt) => this.generate(prompt, language))
    );
  }
}
