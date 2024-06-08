# Build time
FROM oven/bun:1-alpine as build

WORKDIR /app
ENV NODE_ENV production

COPY package.json .
COPY bun.lockb .
RUN bun install --production --silent --frozen-lockfile

COPY src src
COPY tsconfig.json .
RUN bun run build

# Run time
FROM oven/bun:1-alpine as runner

WORKDIR /app
ENV NODE_ENV production

COPY --from=build /app/out .

USER bun
EXPOSE $PORT
ENTRYPOINT [ "bun", "index.js" ]