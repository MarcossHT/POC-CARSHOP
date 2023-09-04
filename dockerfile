# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM gcr.io/distroless/nodejs:16

# Create and change to the app directory.
WORKDIR /app

# Copy local code to the container image.
COPY . /app

# Run the web service on container startup.
CMD [ "/nodejs/bin/node", "/app/dist/main" ]
