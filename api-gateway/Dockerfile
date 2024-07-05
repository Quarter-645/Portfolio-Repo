# Use the official NGINX image from the Docker Hub
FROM nginx:latest

EXPOSE 80

# Copy custom NGINX configuration file from the current directory to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Ensure the default.conf file is removed if it exists
RUN rm /etc/nginx/conf.d/default.conf


# Copy other necessary files (e.g., SSL certificates) if needed
# COPY path/to/certificates /etc/nginx/certificates/
