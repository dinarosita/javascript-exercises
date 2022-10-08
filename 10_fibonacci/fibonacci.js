const fibonacci = function(a) {
    if (a <= 0) {
        return "OOPS";
    }
    const fib = [1, 1];
    for (let i = 2; i < a; i++) {
        fib.push(fib[i-1] + fib[i-2]);
    }
    return fib[a-1];
};

// Do not edit below this line
module.exports = fibonacci;
