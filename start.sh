#!/bin/bash

# Load environment variables from the .env file
set -a
source .env
set +a

# Run docker-compose up build
docker-compose up --build -d