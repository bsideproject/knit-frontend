# Specifies where to get the base image (Node v12 in our case) and creates a new container for it
FROM node:14.16.0

# Set working directory. Paths will be relative this WORKDIR.
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN yarn

# Copy source files from host computer to the container
COPY . .

# Build the app
RUN yarn build

# Specify port app runs on
EXPOSE 80

# Run the app
CMD [ "yarn", "start" ]