// In the Node.js module system, each file is treated as a separate module. Only exported variables are accessible from outside.

const PI = Math.PI; // not exported => private to circle.js

function area(radius) {
    return (radius ** 2) * PI;
}

// objects and functions can be exported by specifying additional properties on the existing exports object
module.exports.area = area;

module.exports.circumference = function(radius) {
    return 2 * radius * PI;
};