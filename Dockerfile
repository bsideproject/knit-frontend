# Specifies where to get the base image (Node v12 in our case) and creates a new container for it
FROM node:14.16.0

WORKDIR /usr/src/app


ENV NEXT_PUBLIC_BASE_URL https://knitwiki.com
ENV NEXT_PUBLIC_AUTH_CLIENT_ID_NAVER 'oxEmJeifshUzDPnoU6No'
ENV NEXT_PUBLIC_AUTH_CLIENT_ID_GOOGLE ''
ENV NEXT_PUBLIC_API_URL https://httpbin.org/

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