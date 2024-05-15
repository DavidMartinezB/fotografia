# Use the official image as a parent image
FROM mysql:latest

# Set the working directory in the container
WORKDIR /docker-entrypoint-initdb.d

# Copy the current directory contents into the container at /docker-entrypoint-initdb.d
COPY ./FotoDataBase.sql ./