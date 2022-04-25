# Install dependencies only when needed
FROM node:alpine AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production --network-timeout 1000000
RUN yarn add --dev typescript @types/node
# ==================================================================
# Rebuild the source code only when needed
FROM node:alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build
RUN npm prune --production
RUN yarn cache clean
# ==================================================================
# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs:nodejs /app
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY .env ./
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["yarn", "start"]