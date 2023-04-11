# Use the official Node.js image as the base image
FROM node:16

# Set the working directory to /app
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
