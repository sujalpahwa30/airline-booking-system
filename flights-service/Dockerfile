# Use a specific and lightweight version of Node.js
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first to leverage Docker's cache
COPY package*.json ./

# Install dependencies using the lockfile
RUN npm ci

# Copy the rest of your application's source code
COPY . .

# Expose the port the service will run on
EXPOSE 3002

# The command to start the application
CMD ["npm", "run", "dev"]