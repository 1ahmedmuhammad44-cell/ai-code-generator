export interface GenerationOptions {
  language?: string;
  temperature?: number;
  maxTokens?: number;
  style?: 'concise' | 'detailed' | 'documented';
}

export interface CodeGenerationResult {
  code: string;
  language: string;
  timestamp: Date;
  tokens?: {
    input: number;
    output: number;
  };
}

export interface BatchGenerationRequest {
  prompts: string[];
  language?: string;
  options?: GenerationOptions;
}
