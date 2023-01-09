import express, { Request } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { getChatGPTAPI } from './chatgpt.js';

interface CreateChatGPTMessageRequestBody {
  text: string;
}

interface CreateChatGPTMessageResponse {
  answer: string;
}

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
// const api = await getChatGPTAPI();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('ChatGPT server is running OK');
});

app.post(
  '/chatgpt/messages',
  (
    req: Request<
      {},
      CreateChatGPTMessageResponse,
      CreateChatGPTMessageRequestBody
    >,
    res,
  ) => {
    const { body } = req;
    res.json({ answer: body.text });
  },
);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
