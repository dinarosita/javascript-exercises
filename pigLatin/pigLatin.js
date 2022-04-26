function pigify(word) {

    let index = 0;
    while (!(/[aeiou]/).test(word[index])) {
        if (word[index] === "q" && word[index+1] === "u") {
            index += 2;
        } else {
            index += 1;
        }
    }

    let wordArray = word.split ("");
    let movedPart = wordArray.splice(index);
    let pigArray = movedPart.concat(wordArray, "ay");

    return pigArray.join("");
}
 
function pigLatin(text) {
    return text
        .split(" ")
        .map(word => pigify(word))
        .join(" ");
};
  
// Do not edit below this line
module.exports = pigLatin;