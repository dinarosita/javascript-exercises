const removeFromArray = function(array, ...rem) {
    return array.filter(el => !rem.includes(el));
};

// Do not edit below this line
module.exports = removeFromArray;


