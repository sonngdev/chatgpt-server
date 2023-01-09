import express from 'express';
import dotenv from 'dotenv';
import { getChatGPTAPI, ChatGPTAPIBrowser } from './chatgpt.js';

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
