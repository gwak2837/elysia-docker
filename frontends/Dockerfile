# 1. Install dependencies only when needed
FROM oven/bun:1-alpine AS builder

WORKDIR /app
ENV NODE_ENV production

COPY package.json bun.lockb ./
RUN bun install --silent --frozen-lockfile
COPY . .
RUN bun run --bun build

# 2. Production image, copy all the files and run next
FROM oven/bun:1-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENTRYPOINT [ "bun", "server.js" ]
