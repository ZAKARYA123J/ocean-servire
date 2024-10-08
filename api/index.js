import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import routes from './router/router.js';
const app = new Hono().basePath('/api')

app.get('/', (c) => {
  return c.json({ message: "Congrats! You've deployed Hono to Vercel" })
})

const handler = handle(app);
app.route('/', routes);
export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;