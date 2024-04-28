FROM oven/bun:1-alpine

WORKDIR /app

# COPY public public 
COPY src src
COPY bun.lockb .
COPY package.json .
COPY tsconfig.json .

ENV NODE_ENV production
RUN bun install --production

USER bun
EXPOSE 8080
ENTRYPOINT [ "bun", "run", "src/index.ts" ]