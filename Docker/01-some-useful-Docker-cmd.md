### Useful Docker commands

* To check Docker version
```javascript
	cmd: docker -v
```
* To pull Docker images
```javascript
	cmd: docker pull <docker-image-name>
```
* To push Docker images
```javascript
	cmd: docker push <docker-image-name>
```
* To list Docker images
```javascript
	cmd: docker images
```
* To list all running Docker containers
```javascript
	cmd: docker ps
```
* To list all stopped Docker containers
```javascript
	cmd: docker ps -a
```
* To stop running Docker containers
```javascript
	cmd: docker stop <container-name>
```
* To remove the stopped Docker container
```javascript
	cmd: docker rm <container-name>
```
* To stop and remove running Docker containers
```javascript
	cmd: docker stop <container-name> && docker rm <container-name>
```
