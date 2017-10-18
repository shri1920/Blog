## etcd

etcd is a reliable distributed key value store.  
To start the single node etcd, download the etcd_docker.sh and run the script using sh etcd_docker.sh  
**Note**: The script runs the etcd using Docker. 

### etcd API

- To get the version of etcd running.
````
curl -XGET -L http://127.0.0.1:2379/version
````
- Set the key and value.
````
curl -XPUT http://127.0.0.1:2379/v2/keys/message -d value="Hello world"
````
- To update the value of a key.
````
curl -XPUT http://127.0.0.1:2379/v2/keys/message -d value="Hello etcd"
````
- To list the keys.
````
curl -XGET http://127.0.0.1:2379/v2/keys/
````
- To fetch the value of a key
````
curl -XGET http://127.0.0.1:2379/v2/keys/message
````
- To delete a key
````
curl -XDELETE http://127.0.0.1:2379/v2/keys/message
````
- Using TTL (in seconds) for a key
````
curl -XPUT http://127.0.0.1:2379/v2/keys/foo -d value=bar -d ttl=5
````
- To create a dir
````
curl -XPUT http://127.0.0.1:2379/v2/keys/dir -d dir=true
````
- For adding key and value to a dir
````
curl -XPUT http://127.0.0.1:2379/v2/keys/dir/key_1 -d value=val_1
curl -XPUT http://127.0.0.1:2379/v2/keys/dir/key_2 -d value=val_2
````
- List keys along with childrens
````
curl -XGET http://127.0.0.1:2379/v2/keys?recursive=true
````
- To delete a dir
````
curl -XDELETE http://127.0.0.1:2379/v2/keys/dir?dir=true
````
- To delete dir that holds child elements
````
curl -XDELETE http://127.0.0.1:2379/v2/keys/dir?recursive=true
````
- To get the etcd metrics
````
curl -XGET -L http://127.0.0.1:2379/metrics
````

