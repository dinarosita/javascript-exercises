const findTheOldest = function(arr) {
    let obj;
    arr.reduce((oldest, el) => {
        if (!el.yearOfDeath) {
            el.yearOfDeath = new Date().getFullYear();
        }
        const age = el.yearOfDeath - el.yearOfBirth;
        if (age > oldest) {
            obj = el;
            return age;
        } else {
            return oldest;
        }
    }, 0)
    return obj;
};

// Do not edit below this line
module.exports = findTheOldest;
