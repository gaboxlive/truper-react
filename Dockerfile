# Stage 1: Build the React application
FROM node:22-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application for production
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built React application from the build stage
# Replace 'your-app-name' with the actual name of your React application's build output folder
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration (optional, but recommended for React apps)
# Create an 'nginx' directory in your project root with a 'default.conf' file
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for Nginx
EXPOSE 80

# Command to start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]