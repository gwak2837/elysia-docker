import { Elysia } from 'elysia';

const app = new Elysia().get('/', () => 'Hello Elysia').listen(4000);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);