import express from 'express';
import dotenv from 'dotenv';
import { getChatGPTAPI } from './chatgpt.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const api = await getChatGPTAPI();

app.get('/', (req, res) => {
  res.send('ChatGPT server is running OK');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
