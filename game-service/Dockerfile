FROM alpine:latest

# Update and install necessary packages
RUN apk add --update --no-cache python3 py3-pip make build-base && ln -sf python3 /usr/bin/python

# Create and activate a virtual environment
RUN python3 -m venv /venv
ENV PATH="/venv/bin:$PATH"

RUN python3 -m ensurepip

RUN pip3 install --no-cache --upgrade --break-system-packages pip setuptools
RUN pip3 install flask

# Copy all files into container
COPY . /app/.

# Set the working directory
WORKDIR /app

# Expose the port (e.g., 8000)
EXPOSE 8000

# Run the Python script on the specified port (e.g., 8000)
CMD ["python3", "run.py", "8000"]
