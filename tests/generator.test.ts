import { CodeGenerator } from '../src/generator';

describe('CodeGenerator', () => {
  let generator: CodeGenerator;

  beforeAll(() => {
    generator = new CodeGenerator();
  });

  describe('generate', () => {
    it('should generate code from a prompt', async () => {
      const prompt = 'Create a simple Hello World function';
      const code = await generator.generate(prompt);
      
      expect(code).toBeDefined();
      expect(typeof code).toBe('string');
      expect(code.length).toBeGreaterThan(0);
    });

    it('should support different languages', async () => {
      const prompt = 'Create a function that adds two numbers';
      const pythonCode = await generator.generateWithLanguage(prompt, 'python');
      
      expect(pythonCode).toBeDefined();
      expect(typeof pythonCode).toBe('string');
    });
  });

  describe('generateMultiple', () => {
    it('should generate multiple code snippets', async () => {
      const prompts = [
        'Create a sum function',
        'Create a multiply function'
      ];
      const codes = await generator.generateMultiple(prompts);
      
      expect(codes).toHaveLength(2);
      expect(codes.every(code => typeof code === 'string')).toBe(true);
    });
  });
});
