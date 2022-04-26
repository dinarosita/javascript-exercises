function valid (char) {
    return (/[a-zA-Z]/).test(char);
}

const palindromes1 = function (text) {
    let i = 0;
    let j = text.length - 1;
    while (i < j) {
        if (valid(text[i]) && valid(text[j])) {
            if (text[i].toLowerCase() === text[j].toLowerCase()) {
                i += 1;
                j -= 1;
            } else {
                return false;
            }
        } else {
            if (!valid(text[i])) {
                i += 1;
            }
            if (!valid(text[j])) {
                j -= 1;
            }
        }     
    }
    return true;
};

const palindromes = function (text) {
    const textArray = text
        .toLowerCase()
        .split("")
        .filter(el => valid(el));

    const forwardText = textArray.join("");
    const backwardText = textArray.reverse().join("");
    if (forwardText === backwardText) {
        return true;
    } else {
        return false;
    }
};

const palindromes3 = function (text) {
    const string = text
        .toLowerCase()
        .split("")
        .filter(el => valid(el)).join("");
        
    for (let i = 0; i <= (string.length/2 - 1); i++) {
        if (string[i] !== string[string.length-1-i]) {
            return false;
        }
    }
    return true;
};

function runTime (palFunction) {
    for (let j = 0; j < 5; j++) {
        const text = "Animal loots, foliated detail? of stool lamina!!!";
        const startTime = Date.now();
        for (let i = 0; i < 1000000; i++) {
            palFunction(text);
        }
        const endTime = Date.now();
        console.log(endTime - startTime);
    }
}

function runTimeLongText (palFunction, textTimes) {
    let text = "Animal loots, foliated: detail? of stool lamina!!! Animal loots, foliated: detail? of stool lamina!!"; 
    // text is made in such the length is 100 chars
    const timeArray = [];
    let longText = "";
    for (let i = 0; i < textTimes; i++) {
        longText += text;
    }
    for (let j = 0; j < 5; j++) {
        const startTime = Date.now();
        for (let i = 0; i < 1; i++) {
            palFunction(longText);
        }
        const endTime = Date.now();
        timeArray.push(endTime - startTime);
    }
    console.log(timeArray);
}

// Do not edit below this line
module.exports = palindromes;
