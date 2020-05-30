FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Copy and Install App Depds
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose app port
EXPOSE 8080

CMD [ "node", "server.js" ]

