### The example demonstrate How to Dockerize a web application.

Let's first create a sample static web page (index.html) file. After that we will create a nginx configuration file to serve static web page. Then we will create a Docker image for the web application.

Directory structure of the application.
```sh
Dockerizing-a-web-app
  |
  |-----html
  |       |
  |       |-----index.html
  |
  |-----conf
  |       |
  |       |-----nginx.conf
  |
  |-----Dockerfile
```
Create a parent directory to hold all the required files.
```sh
mkdir Dockerizing-a-web-app && cd Dockerizing-a-web-app
```
Create a directory to store html file.
```sh
mkdir html && cd html
```
Create a html file.
```sh
touch index.html
```
Open the html file in your favourite editor and write some content.
```sh
<!DOCTYPE html>
<html>
<head>
    <title>How to Dockerize a web app</title>
</head>
<body>
    <h1>This is a awesome web app</h1>
    <p>We are going to Dockerize this awesome web app.</p>
</body>
</html>
```
Create directory to hold the nginx config to serve static html page.
```sh
mkdir conf && cd conf
```
Create a file to store nginx config.
```sh
touch nginx.conf
```
Open the nginx.conf file in your favourite editor and write the server block to serve the static html file.
```sh
server {
        listen         80;
        server_name    localhost;
        root           /usr/share/nginx/html/;
        index          index.html index.htm;
}
```
Create a file called Dockerfile.
```sh
touch Dockerfile
```
Open the Dockerfile with your favourite editor. Define the base Docker image.
```sh
FROM nginx:alpine
```
Copy the static html file to desired location inside the Docker image.
```sh
COPY html/index.html /usr/share/nginx/html
```
Copy the nginx configuration to appropriate location inside the Docker image.
```sh
COPY conf/nginx.conf /etc/nginx/conf.d/default.conf
```
The final Dockerfile looks as below.
```sh
FROM nginx:alpine
COPY html/index.html /usr/share/nginx/html
COPY conf/nginx.conf /etc/nginx/conf.d/default.conf
```
Building the docker image: run the below command to Create the docker image.
```sh
cd /path/to/Dockerizing-a-web-app
docker build -t shri1920/sample-web-app .
```
Checking the docker image: Use the below command to list the docker images.
```sh
docker images
```
Starting the docker container: Use the below command to start the docker container.
```sh
docker run --name sample-web-app -d -p 8085:80 -t shri1920/sample-web-app
```
Listing the Docker containers.
```sh
docker ps (To list Docker containers)
docker ps -a (To list all Docker containers, including stops or exited containers)
```
To test the app, open the browser and hit localhost:port-no (localhost:8085). Now you should be able to see the content of web app.