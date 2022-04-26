function isCamelCase (string) {
    for (let i = 0; i < string.length; i++) {
        if (!(/[a-zA-Z0-9]/).test(string[i])) {
            return false;
        }
    }
    if (!(/[a-z]/).test(string[0])) {
        return false;
    }
    return true;
}

const snakeCase = function(text) {
    if (isCamelCase(text)) {
        text = text.replace(/[A-Z]/g, "_$&");
    } 
    text = text.replace(/\W/g, "_");
    text = text.replace(/__*/g, "_");
    if (text[0] === "_") {
        text = text.slice(1);
    }
    if (text[text.length-1] === "_") {
        text = text.slice(0, text.length-1);
    }
    return text.toLowerCase();    
};

// Do not edit below this line
module.exports = snakeCase;
