// lib/openai.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,  // Ensure the API key is correctly set
  organization: process.env.NEXT_PUBLIC_OPENAI_ORGANIZATION_ID,  // Optional
});

export default async function generateCompletion(inputText: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',  // Specify the model
      messages: [{
        role: 'user',  // User role for input message
        content: `Rewrite the following text: ${inputText}`  // Pass the input text here
      }],
      temperature: 1,  // Adjust temperature to control randomness
      max_tokens: 256,  // Maximum number of tokens in the output
    });

    console.log('API response:', response);
    const messageContent = response.choices[0]?.message?.content ?? 'No content returned';
    return messageContent;
  } catch (error:any) {
    // Enhanced error logging
    if (error.response) {
      console.error('API error response:', error.response.data);
    } else {
      console.error('Unexpected error:', error.message);
    }
    throw new Error('Failed to generate completion');
  }
}
