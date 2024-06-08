import { Stream } from '@elysiajs/stream'
import { Elysia } from 'elysia'

import { PORT } from './common/constant'

const app = new Elysia()
  .get(
    '/',
    () =>
      new Stream(async (stream) => {
        stream.send('hello')

        await stream.wait(1000)
        stream.send('world')

        stream.close()
      }),
  )
  .listen(PORT)

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port} ${process.env.NODE_ENV ?? ''}`,
)
