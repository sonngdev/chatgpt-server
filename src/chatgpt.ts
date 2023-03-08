import { ChatGPTAPI } from 'chatgpt';

export { ChatGPTAPI };

export async function getChatGPTAPI(): Promise<ChatGPTAPI> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('Missing OpenAI API key. Please provide OPENAI_API_KEY as an env variable.');
  }

  const api = new ChatGPTAPI({ apiKey });

  return api;
}
