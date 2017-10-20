
const http = require("http"),
    querystring = require('querystring');

class Etcd {
    
    constructor (hostName, port, registryName) {
        this.hostName = hostName;
        this.port     = port;
        this.store    = registryName
    }

    // Function to register a service info for ETCD
    register (dirName, childInfo) {
        return new Promise((resolve, reject) => {
            if (!dirName) {
                reject({message: "Please enter a valid hash name", status: "error"});
                return;
            }
            if (typeof dirName !== "string") {
                reject({message: "Hash name should be a string", status: "error"});
                return;
            }
            if (Object.prototype.toString.call(childInfo) !== "[object Object]") {
                reject({message: "Info should be a object", status: "error"});
                return;
            }

            let postReq, options, postData;
            options = {
                hostname: this.hostName,
                port: this.port,
                method: "PUT",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                path: "/v2/keys/" + this.store + "/" + dirName,
            };
            
            postData = querystring.stringify({value: JSON.stringify(childInfo)});
            postReq = http.request(options, response => {
                response.on("data", (_data) => {
                    let respData = "" + _data.toString(), filteredData = {}, i;
                    respData = JSON.parse(respData);
                    resolve({data: respData.node || {}, status: "success"});
                });
            }).on("error", () => {
                reject({message: "Error fetching info for " + dirName, status: "error"});
            });
            postReq.write(postData);
            postReq.end();
        });
    }
    
    // Function to fetch a service info from ETCD
    discover (dirName) {
        return new Promise((resolve, reject) => {
            if (!dirName) {
                reject({message: "Please enter a valid hash name", status: "error"});
                return;
            }
            if (typeof dirName !== "string") {
                reject({message: "Hash name should be a string", status: "error"});
                return;
            }
            
            let options = {
                hostname: this.hostName,
                port: this.port,
                method: "GET",
                path: "/v2/keys/" + this.store + "/" + dirName,
            };
            
            http.request(options, response => {
                response.on("data", (_data) => {
                    let respData = "" + _data.toString(), filteredData = {}, i;
                    respData = JSON.parse(respData);
                    if (respData.errorCode && respData.message === "Key not found") {
                        reject({message: "Data not found for " + dirName, status: "error"});
                        return;
                    }
                    resolve({data: respData.node.value || {}, status: "success"});
                });
            }).on("error", () => {
                reject({message: "Error fetching info for " + dirName, status: "error"});
            }).end();
        });
    }

    // Function to remove a service info from ETCD
    remove (dirName) {
        return new Promise((resolve, reject) => {
            if (!dirName) {
                reject({message: "Please enter a valid hash name", status: "error"});
                return;
            }
            if (typeof dirName !== "string") {
                reject({message: "Hash name should be a string", status: "error"});
                return;
            }
            
            let options = {
                hostname: this.hostName,
                port: this.port,
                method: "DELETE",
                path: "/v2/keys/" + this.store + "/" + dirName + "?recursive=true",
            };
            
            http.request(options, response => {
                response.on("data", (_data) => {
                    let respData = "" + _data.toString(), filteredData = {}, i;
                    respData = JSON.parse(respData);
                    if (respData.errorCode || respData.message === "Key not found") {
                        reject({message: "Hash not found " + dirName, status: "error"});
                        return;
                    }
                    if (respData.action === "delete") {
                        resolve({data: {action: "delete"}, status: "success"});
                        return;
                    }
                    reject({message: "Error deleting " + dirName, status: "error"});
                });
            }).on("error", () => {
                reject({message: "Error fetching info for " + dirName, status: "error"});
            }).end();
        });
    }
}

module.exports = Etcd;