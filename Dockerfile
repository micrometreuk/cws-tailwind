# Base on offical Node.js Alpine image
FROM node:alpine

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2

COPY ./package*.json ./

# Install dependencies
RUN yarn

# Copy all files
COPY ./ ./

RUN yarn build

# Expose the listening port
EXPOSE 8551
CMD yarn start


# Run npm start script with PM2 when container starts
#CMD [ "npm", "run express" ]
#CMD [ "pm2-runtime", "start", "npm", "--", "start" ]

