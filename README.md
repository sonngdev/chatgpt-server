# API server for ChatGPT

Backend server for **ChatGPT With Voice**, now using the ✨ official ChatGPT APIs ✨. You can check out [the website](https://chatgpt.sonng.dev/), or find the [frontend repo](https://github.com/sonngdev/chatgpt-voice) on GitHub.

## Installation
Clone this repo.

```bash
git clone https://github.com/sonngdev/chatgpt-server.git
```

Prepare environment variables by creating `.env` at the project root. You need to sign up for an [OpenAI API Key](https://platform.openai.com/overview).

```t
PORT=8000 # Or whichever port available
OPENAI_API_KEY="<your-openai-api-key>"
```

Start the server and you are done! Remember to use Node 18 or higher, this is the requirement of this package's core dependency – [`chatgpt`](https://github.com/transitive-bullshit/chatgpt-api).

```bash
npm install

# Run locally, or...
npm run dev

# Run on production
npm run build
npm run start
```

## Contribution
Thank you [Travis Fischer](https://github.com/transitive-bullshit) for your [`chatgpt`](https://github.com/transitive-bullshit/chatgpt-api) package.
