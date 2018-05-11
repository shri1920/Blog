## Callback, Callback hell, Promise and async await

**Callback** is a function, passed as a parameter to another function. It is a function that will be be executed after another function has finished executing.
````
var addition = function (a, b, callback) {
	var add = a + b;
	if (callback && typeof callback === "function") {
		callback(add);
	}
};

addition(2, 1, function (add) {
	console.log("addition", add);
});
````
**Callback hell**
````
var addition = function (a, b, callback) {
	var add = a + b;
	if (callback && typeof callback === "function") {
		callback(add);
	}
};

var subtraction = function (a, b, callback) {
	var sub = a - b;
	if (callback && typeof callback === "function") {
		callback(sub);
	}
};

var multiplication = function (a, b, callback) {
	var mul = a * b;
	if (callback && typeof callback === "function") {
		callback(mul);
	}
};


var calculate = function () {
	addition(2, 1, function (add) {
		console.log("addition", add);

		subtraction(2, 1, function (sub) {
			console.log("subtraction", sub);

			multiplication(2, 1, function (mul) {
				console.log("multiplication", mul);
			});
		});
	});
};

calculate();
````
**Promise**
````
var addition = function (a, b) {
    return new Promise(function (resolve, reject) {
        var add = a + b;
        resolve(add);
    });
};

var subtraction = function (a, b) {
    return new Promise(function (resolve, reject) {
        var sub = a - b;
        resolve(sub);
    });
};

var multiplication = function (a, b) {
    return new Promise(function (resolve, reject) {
        var mul = a * b;
        resolve(mul);
    });
};



addition(2, 1)
    .then(function (add) {
        console.log("addition", add);
        return subtraction(2, 1);
    })
    .then(function (sub) {
        console.log("subtraction", sub);
        return multiplication(2, 1);
    })
    .then(function (mul) {
        console.log("multiplication", mul);
    })
    .catch(function (err) {
        console.log("Error", err);
    });
````
