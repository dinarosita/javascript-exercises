const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	let sum = 0;
    for (el of a) {
        sum += el;
    }
    return sum;
};

const multiply = function(a) {
    let mult = 1;
    for (el of a) {
        mult *= el;
    }
    return mult;
};

const power = function(a, b) {
	let pow = 1;
    for (let i = 1; i <= b; i++) {
        pow *= a;
    }
    return pow;
};

const factorial = function(a) {
    let fac = 1;
    for (let i = 1; i <= a; i++) {
        fac *= i;
    }
    return fac;
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
