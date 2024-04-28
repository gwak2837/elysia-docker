import { Elysia } from 'elysia';
import { PORT } from './common/constant';

const app = new Elysia().get('/', () => 'Hello Elysia').listen(PORT);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
