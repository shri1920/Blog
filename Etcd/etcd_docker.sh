#!/bin/bash

# Shell script to start ETCD using Docker 

REGISTRY=gcr.io/etcd-development/etcd
VERSION=v3.2.8
DATA_DIR=/opt/etcd
NODE1=$(hostname --all-ip-addresses | cut -d' ' -f1)

echo "Starting ETCD Cluster on $NODE1"

# Checck if the DATA_DIR is available or not
if [ ! -d "$DATA_DIR" ]; then
	echo "$DATA_DIR Not Found."
	exit
fi

ETCD_PROC=$(docker ps | grep etcd)

if [ ! -z "$ETCD_PROC" ]; then
	echo "ETCD already running! Stoping and removing the existing container."
	docker stop etcd && docker rm etcd
fi

docker run -d \
  -p 2379:2379 \
  -p 2380:2380 \
  --volume=${DATA_DIR}:/etcd-data \
  --name etcd ${REGISTRY}:${VERSION} \
  /usr/local/bin/etcd \
  --data-dir=/etcd-data --name node1 \
  --initial-advertise-peer-urls http://${NODE1}:2380 --listen-peer-urls http://0.0.0.0:2380 \
  --advertise-client-urls http://${NODE1}:2379 --listen-client-urls http://0.0.0.0:2379 \
  --initial-cluster node1=http://${NODE1}:2380

docker logs -f etcd
