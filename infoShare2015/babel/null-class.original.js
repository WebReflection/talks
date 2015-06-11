class Null extends null {}

var n = new Null;
console.log('toString: ' + n.toString);

var k = '__proto__';

// in node 0.10 and older browsers
// will change the n prototype
n[k] = {};

console.log('toString: ' + n.toString);