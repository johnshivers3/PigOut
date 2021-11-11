FROM node:12-alpine AS builder
ENV NODE_ENV development
# Add a work directory
WORKDIR /
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
# Copy app files
COPY . .
# Expose port
EXPOSE 4000
# Start the app
CMD [ "npm", "run", "dev" ]
