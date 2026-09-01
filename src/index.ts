import dotenv from 'dotenv';
import { CodeGenerator } from './generator';

dotenv.config();

async function main() {
  const generator = new CodeGenerator();
  
  // Example usage
  const prompt = 'Create a function that calculates the factorial of a number';
  
  console.log('Generating code for:', prompt);
  console.log('---');
  
  try {
    const code = await generator.generate(prompt);
    console.log('Generated Code:');
    console.log(code);
  } catch (error) {
    console.error('Error generating code:', error);
  }
}

main();
