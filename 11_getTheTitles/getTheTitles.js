const getTheTitles = function(collection) {
    const title = [];
    for (let i = 0; i < collection.length; i++) {
        title[i] = collection[i].title;
    }
    return title;
};

// Do not edit below this line
module.exports = getTheTitles;
