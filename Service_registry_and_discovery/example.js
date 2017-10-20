var Etcd = require("./etcd");

var etcd = new Etcd("127.0.0.1", "2379", "services");

var info = {
    host     : "127.0.0.1",
    port     : 3000,
	protocol : "http",
	api      : "/service/v1"
};

// To register info for service 1
etcd.register("myservice_1", info).then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
});

// To get the details of myservice_1
etcd.discover("myservice_1").then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
});

// To remove the info for myservice_1 from registry
etcd.remove("myservice_1").then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
});