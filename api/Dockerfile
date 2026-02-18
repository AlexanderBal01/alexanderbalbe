# --- Base Stage ---
FROM node:24-slim AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci

# --- Development Stage ---
FROM base AS development
COPY . .
# NestJS watch mode for hot-reloading in Docker
CMD ["npm", "run", "start:dev"]

# --- Build Stage ---
FROM base AS build
COPY . .
RUN npm run build

# --- Production Stage ---
FROM node:24-slim AS production
WORKDIR /app
ENV NODE_ENV=production
USER node
COPY --from=build --chown=node:node /app/dist ./dist
COPY --from=build --chown=node:node /app/package*.json ./
RUN npm ci --omit=dev
CMD ["node", "dist/main.js"]