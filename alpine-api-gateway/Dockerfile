# Use the official Alpine base image
FROM alpine:latest

# Install NGINX
RUN apk --no-cache add nginx

# Copy custom NGINX configuration file if needed
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/sites-available/default

# Copy SSL pem files into NGINX
COPY fullchain.pem /etc/letsencrypt/live/api.connormorrison.codes/fullchain.pem
COPY privkey.pem /etc/letsencrypt/live/api.connormorrison.codes/privkey.pem

# Copy static website files to the default NGINX directory
# COPY html /usr/share/nginx/html

# Expose the port NGINX will run on
EXPOSE 80
EXPOSE 443

# Run NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
