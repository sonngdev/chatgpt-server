import express, { Request } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { errorHandler } from './middlewares.js';
import { getChatGPTAPI } from './chatgpt.js';

interface CreateChatGPTMessageRequestBody {
  text: string;
  parentMessageId?: string;
}

interface CreateChatGPTMessageResponse {
  answer: string;
  messageId: string;
}

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const api = await getChatGPTAPI();

app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('ChatGPT server is running OK');
});

app.post(
  '/chatgpt/messages',
  async (
    req: Request<
      {},
      CreateChatGPTMessageResponse,
      CreateChatGPTMessageRequestBody
    >,
    res,
    next,
  ) => {
    const { text, parentMessageId } = req.body;

    try {
      const response = await api.sendMessage(text, {
        parentMessageId,
      });
      res.json({
        answer: response.text,
        messageId: response.id,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return next(error);
      }
      const errorMessage = typeof error === 'string' ? error : 'Something went wrong';
      return next(new Error(errorMessage));
    }
  },
);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
