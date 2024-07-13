#!/bin/bash

# Kill all NGINX isntances
sudo systemctl stop nginx
sudo pkill -f nginx & wait $!

# Load environment variables from the .env file
set -a
source .env
set +a

# Run docker-compose up build
docker-compose up --build -d