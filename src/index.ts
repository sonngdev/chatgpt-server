import express from 'express';
import * as dotenv from 'dotenv';
import { ChatGPTAPIBrowser } from 'chatgpt';

async function getChatGPTAPI(): Promise<ChatGPTAPIBrowser> {
  const email = process.env.OPENAI_EMAIL;
  const password = process.env.OPENAI_PASSWORD;

  if (!email) {
    throw new Error('Missing OpenAI email. Please provide OPENAI_EMAIL as an env variable.')
  }
  if (!password) {
    throw new Error('Missing OpenAI password. Please provide OPENAI_PASSWORD as an env variable.')
  }

  const api = new ChatGPTAPIBrowser({
    email,
    password,
    debug: true,
  });

  await api.initSession();

  return api;
}

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
let api: ChatGPTAPIBrowser | null = null;

app.get('/', (req, res) => {
  res.send('ChatGPT server is running OK');
});

app.listen(port, async () => {
  api = await getChatGPTAPI();
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
