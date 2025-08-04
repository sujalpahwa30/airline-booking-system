FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# This service will run on port 3004
EXPOSE 3004
CMD ["npm", "run", "dev"]