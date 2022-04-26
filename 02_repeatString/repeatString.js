const repeatString = function(string, num) {
    let text = "";
    
    if (num < 0) {
        text += "ERROR";
    } else {
        for (let i = 1; i <= num; i++) {
            text += string;
        }
    }
    
    return text;
};

// Do not edit below this line
module.exports = repeatString;
