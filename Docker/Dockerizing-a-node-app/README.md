### The example demonstrate How to Dockerize a Node.js application.

Let's first create a sample Node.js (HelloWorld) application.Then we will create a Docker image for our Node.js application.

Directory structure of the application.
```sh
Dockerizing-a-node-app
  |
  |-----source
  |       |
  |       |-----main.js
  |       |
  |       |-----package.json
  |
  |-----Dockerfile
```
Create a parent directory to hold all the required files.
```sh
mkdir Dockerizing-a-node-app && cd Dockerizing-a-node-app
```
Create a directory to store application file.
```sh
mkdir source && cd source
```
Create a package.json file which describes your application.
```sh
{
    "name": "samplenodeapp",
    "version": "1.0.0",
    "description": "A sample nodeJS app",
    "main": "main.js",
    "scripts": {
        "test": "node main.js"
    },
    "author": "shrisha.sb@gmail.com",
    "license": "ISC",
    "dependencies": {
        "express": "^4.14.1"
    }
}
```
Create a file (main.js) that defines the Node.js app.
```sh
const express = require('express'),
      app     = express();

app.set('port', 3000);

app.get('/', function (req, res) {
    res.send('Hello world\n');
});

app.listen(app.get('port'));
console.log('Sample node service Started @ ' + new Date() + ' Running on port no: ' + app.get('port'));
```
Create a file called Dockerfile.
```sh
touch Dockerfile
```
Open the Dockerfile with your favourite editor. Define the base Docker image.
```sh
FROM       nodesource/node:4.0
```
Create directory to hold Node.js application code in the Docker image.
```sh
RUN        mkdir /opt/source
```
Copy the Node.js application code to the directory created in the previous step.
```sh
COPY       ./source/* /opt/source/
```
Install the application dependencies.
```sh
RUN        cd /opt/source; npm install .
```
Define the working directory of your application.
```sh
WORKDIR    /opt/source
```
Define the command to start the Node.js application.
```sh
ENTRYPOINT ["node", "/opt/source/main.js"]
```
The final Dockerfile looks as below.
```sh
FROM       nodesource/node:4.0
RUN        mkdir /opt/source
COPY       ./source/* /opt/source/
RUN        cd /opt/source; npm install .
WORKDIR    /opt/source
ENTRYPOINT ["node", "/opt/source/main.js"]
```
Building the docker image: run the below command to create the docker image.
```sh
cd /path/to/Dockerizing-a-node-app
docker build -t shri1920/sample-node-app .
```
Checking the docker image: Use the below command to list the docker images.
```sh
docker images
```
Starting the docker container: Use the below command to start the docker container.
```sh
docker run --name sample-node-app -d -p 3000:3000 -t shri1920/sample-node-app
```
Listing the Docker containers.
```sh
docker ps (To list Docker containers)
docker ps -a (To list all Docker containers, including stops or exited containers)
```
To test the app, open the browser and hit localhost:port-no (localhost:3000). Now you should be able to see the response of the NodeJs service you created.