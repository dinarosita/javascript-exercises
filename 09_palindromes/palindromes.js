const palindromes = function (str) {
    const arr = str
        .replace(/[^a-z]/gi, "")
        .toLowerCase();

    const l = arr.length;
    for (let i = 0; i < l/2; i++) {
        if (arr[i] !== arr[l-1-i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
