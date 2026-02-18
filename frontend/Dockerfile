# frontend/Dockerfile

# 1. Base image met dependencies
FROM node:24-alpine AS base
WORKDIR /app
COPY package*.json ./
# Installeer ALLE dependencies (ook devDependencies zoals Vite/Vinxi)
RUN npm install

# ---------------------------------------
# 2. DEVELOPMENT Stage (Hier wil jij zijn!)
# ---------------------------------------
FROM base AS development
# We kopiëren de rest niet, want we gebruiken Volumes in docker-compose
CMD ["npm", "run", "dev"]

# ---------------------------------------
# 3. BUILD Stage (Voor later/productie)
# ---------------------------------------
FROM base AS build
COPY . .
RUN npm run build

# ---------------------------------------
# 4. PRODUCTION Stage
# ---------------------------------------
FROM node:24-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/.output ./.output
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
CMD ["npm", "run", "start"]