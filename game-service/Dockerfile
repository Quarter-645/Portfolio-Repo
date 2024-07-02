FROM alpine:latest

# Update and install necessary packages
RUN apk add --update --no-cache python3 py3-pip make build-base && ln -sf python3 /usr/bin/python

# Create and activate a virtual environment
RUN python3 -m venv /venv
ENV PATH="/venv/bin:$PATH"

RUN python3 -m ensurepip

RUN pip3 install --no-cache --upgrade pip setuptools

COPY requirements.txt .

RUN pip3 install --no-cache-dir -r requirements.txt

# Copy all files into container
COPY . /app/.
COPY .env /app/.env

# Set the working directory
WORKDIR /app

# Load environment variables
RUN set -a && source /app/.env && set +a

# Expose the port (e.g., 8000)
EXPOSE 8000

# Run the Python script on the specified port (e.g., 8000)
CMD ["python3", "run.py", "8000"]
