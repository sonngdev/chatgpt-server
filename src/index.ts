import * as express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('ChatGPT server is running OK');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
