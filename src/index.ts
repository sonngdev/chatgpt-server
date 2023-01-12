import express, { Request } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { errorHandler } from './middlewares.js';
import { getChatGPTAPI } from './chatgpt.js';

interface CreateChatGPTMessageRequestBody {
  text: string;
  conversationId?: string;
  parentMessageId?: string;
}

interface CreateChatGPTMessageResponse {
  answer: string;
  conversationId: string;
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
    const { text, conversationId, parentMessageId } = req.body;

    try {
      const answer = await api.sendMessage(text, {
        conversationId,
        parentMessageId,
      });
      res.json({
        answer: answer.response,
        conversationId: answer.conversationId,
        messageId: answer.messageId,
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
