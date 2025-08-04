FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# This service will run on port 3003
EXPOSE 3003
CMD ["npm", "run", "dev"]