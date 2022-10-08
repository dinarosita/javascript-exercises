
const maxProfit = function (arr) {
    let bestProfit = 0;
    for (let s = 1; s < arr.length; s++) {
        for (let b = 0; b < s; b++) {
            let todayProfit = arr[s] - arr[b];
            if (todayProfit > bestProfit) {
                bestProfit = todayProfit;
            }
        }
    }
    return bestProfit;
}
module.exports = maxProfit;
