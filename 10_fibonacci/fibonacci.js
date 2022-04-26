const fibonacci = function(num) {
    if (num <= 0) {
        return "OOPS";
    } else {
        const fib = [1,1];
        for (let i = 2; i < num; i++) {
            fib[i] = fib[i-2] + fib[i-1]; 
        }
        return fib[num-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
