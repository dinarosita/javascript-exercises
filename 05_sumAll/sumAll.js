const sumAll = function(a, b) {
    if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
    } else {
        if (b < a) {
            [a, b] = [b, a];
        }

        let sum = 0;
        for (a; a <= b; a++) {
            sum += a;
        }
        return sum;
    }
   
};

// Do not edit below this line
module.exports = sumAll;
