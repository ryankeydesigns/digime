# RyanKey AI Assistant Worker

Secure Cloudflare Workers AI backend for the Digime website.

## Deploy

1. Sign in to Cloudflare with Wrangler: `npx wrangler login`
2. From this directory run: `npx wrangler deploy`
3. Add a Worker custom route or copy the resulting `workers.dev` URL.
4. Activate the frontend in `index.html` with:
   `<link rel="stylesheet" href="ai-chat.css?v=1">`
   `<script src="ai-chat.js?v=1" data-endpoint="https://YOUR-WORKER.workers.dev/chat" defer></script>`

No AI provider key is stored in the browser or repository. The Worker uses the Cloudflare `AI` binding. Production origins are restricted in `src/index.js`.
