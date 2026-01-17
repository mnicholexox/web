# Use Node.js LTS version
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Expose Vite dev server port
EXPOSE 5173

# Start development server
# Note: Source files are mounted via docker-compose.yml volume
CMD ["npm", "run", "dev"]

