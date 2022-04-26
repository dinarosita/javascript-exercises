function decode (char, key) {
    key = key % 26;

    if (!(/[a-zA-Z]/).test(char)) {
        return char;
    } else {
        let code = char.charCodeAt() + key;

        if ((/[A-Z]/).test(char)) {
            if (code < 65) {
                code += 26;
            } else if (code > 90) {
                code -= 26;
            }
        } else if ((/[a-z]/).test(char)) {
            if (code < 97) {
                code += 26;
            } else if (code > 122) {
                code -= 26;
            }
        }

        return String.fromCharCode(code);

    }
}

const caesar = function(text, key) {
    return text
        .split("")
        .map(char => decode (char, key))
        .join("")
};

// Do not edit below this line
module.exports = caesar;

