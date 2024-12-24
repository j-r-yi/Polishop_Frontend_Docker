# Start with basic runtime or specific base image 
FROM node:18

# Add app's source code to image
WORKDIR /app

# COPY dependences first, to cache npm dependencies (avoid updating them each time source code is changed)
# Takes local package json location and 
# place we want to copy into container (current working directory)
COPY package.json package-lock.json ./

# RUN npm install command 
RUN npm install

# COPY source code into container
COPY . .

# Build the application for production
RUN npm run build

# ENV environment variable to run code
ENV PORT=8080

EXPOSE 8080

# CMD instruction (1 per docker file) tells docker how to run the application
# Uses "exec form" instead of "shell form", doesn't start up shell session
# CMD ["npm", "run", "build"] 
CMD ["npm", "run", "start", "--", "-p", "8080"]


