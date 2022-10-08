const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total,el) => total+el, 0)
};

const multiply = function(arr) {
	return arr.reduce((total,el) => total*el, 1)
};

const power = function(a, b) {
	let n = 1;
    for (let i = 1; i <= b; i++) {
        n *= a;
    }
    return n;
};

const factorial = function(a) {
	let n = 1;
    for (let i = 1; i <= a; i++) {
        n *= i;
    }
    return n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
