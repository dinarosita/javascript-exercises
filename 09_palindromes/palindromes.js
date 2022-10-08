const palindromes = function (str) {
    const new = str
        .replace(/[^a-z]/gi, "")
        .toLowerCase();

    const l = new.length;
    for (let i = 0; i < l/2; i++) {
        if (new.charAt(i) !== new.charAt(l-1-i)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
