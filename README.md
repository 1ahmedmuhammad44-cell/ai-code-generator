# AI Code Generator

An intelligent code generation tool powered by OpenAI's language models. Generate production-ready code from natural language descriptions.

## Features

- 🤖 AI-powered code generation using GPT-4
- 🌐 Multi-language support (Python, JavaScript, TypeScript, Java, etc.)
- ⚡ Fast and efficient code generation
- 🔧 Easy-to-use API
- 🎛️ Customizable parameters
- 🧠 Batch code generation

## Installation

```bash
npm install
```

## Setup

1. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

2. Add your OpenAI API key to the `.env` file:

```
OPENAI_API_KEY=your_api_key_here
MODEL=gpt-4
TEMPERATURE=0.7
```

## Usage

### Basic Usage

```typescript
import { CodeGenerator } from './generator';

const generator = new CodeGenerator();
const code = await generator.generate('Create a function that reverses a string');
console.log(code);
```

### Generate Code in a Specific Language

```typescript
const code = await generator.generateWithLanguage(
  'Create a REST API endpoint',
  'python'
);
```

### Generate Multiple Pieces of Code

```typescript
const prompts = [
  'Create a function to sort an array',
  'Create a function to merge two objects',
  'Create a function to validate email'
];

const codes = await generator.generateMultiple(prompts, 'javascript');
```

## Development

### Build

```bash
npm run build
```

### Run in Development Mode

```bash
npm run dev
```

### Run Tests

```bash
npm test
```

### Lint Code

```bash
npm run lint
```

## API Reference

### CodeGenerator

#### `generate(prompt: string, language?: string): Promise<string>`

Generates code based on the provided prompt.

- `prompt`: Natural language description of the code to generate
- `language`: Programming language (default: 'typescript')

#### `generateWithLanguage(prompt: string, language: string): Promise<string>`

Generates code in a specific language.

#### `generateMultiple(prompts: string[], language?: string): Promise<string[]>`

Generates multiple pieces of code in parallel.

## Configuration

Customize the behavior with environment variables:

- `OPENAI_API_KEY`: Your OpenAI API key (required)
- `MODEL`: The model to use (default: 'gpt-4')
- `TEMPERATURE`: Creativity level 0-1 (default: 0.7)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
