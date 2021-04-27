FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copy source, config, docs
COPY .sequelizerc README.md ./
COPY config ./config
COPY src ./src

# Expose port 3000
EXPOSE 3000

# Start server
CMD [ "npm", "run", "start" ]