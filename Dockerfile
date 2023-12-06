# Rebuild the source code only when needed
FROM node:alpine AS builder
WORKDIR /app
COPY . .
ARG RPC_ADDRESS
ENV RPC_ADDRESS ${RPC_ADDRESS}
ENV NEXT_PUBLIC_RECAPTCHA_KEY 6Lcy_64oAAAAAHzHmABg2B4e2OZHvbNw6m9J3T2H
RUN yarn --network-timeout 1000000
RUN yarn buf
RUN yarn build
RUN npx prisma generate
RUN yarn install
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
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY ./src/lib/prisma ./src/lib/prisma
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["yarn", "start:withprisma"]