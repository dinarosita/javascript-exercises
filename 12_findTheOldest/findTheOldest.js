const findTheOldest = function(arr) {
    return arr.reduce((old, el) => {
        function age(p) {
            if (!p.yearOfDeath) {
                p.yearOfDeath = new Date().getFullYear();
            }
            return p.yearOfDeath - p.yearOfBirth;
        }
        return age(el) > age(old) ? el : old;
    })
};


// Do not edit below this line
module.exports = findTheOldest;
