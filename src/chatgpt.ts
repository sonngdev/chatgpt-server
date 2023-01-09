import { ChatGPTAPIBrowser } from 'chatgpt';

export { ChatGPTAPIBrowser };

export async function getChatGPTAPI(): Promise<ChatGPTAPIBrowser> {
  const email = process.env.OPENAI_EMAIL;
  const password = process.env.OPENAI_PASSWORD;

  if (!email) {
    throw new Error('Missing OpenAI email. Please provide OPENAI_EMAIL as an env variable.');
  }
  if (!password) {
    throw new Error('Missing OpenAI password. Please provide OPENAI_PASSWORD as an env variable.');
  }

  const api = new ChatGPTAPIBrowser({
    email,
    password,
    debug: true,
  });

  await api.initSession();

  return api;
}
