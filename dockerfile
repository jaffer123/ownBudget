# Use Node 18 (Alpine is lightweight)
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY reactjs/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app
COPY reactjs/. .

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
