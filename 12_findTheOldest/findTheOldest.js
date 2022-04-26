const findTheOldest = function(array) {
    array.sort(
        function(a, b) {
            return (
                        (
                            (b.yearOfDeath? b.yearOfDeath : (new Date()).getFullYear()) - b.yearOfBirth
                        ) - (
                            (a.yearOfDeath? a.yearOfDeath : (new Date()).getFullYear()) - a.yearOfBirth
                        )
            )
        }
    )
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
