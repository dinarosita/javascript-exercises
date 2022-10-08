// to generate data for testing: 
// generateTest(days);
// Result is array with 2 elements. First element is the stock array, second is max profit.

function createArray(days) {
    let arr = [];

    for (let i = 1; i <= days; i++) {
        let rando = Math.floor(Math.random() * 100 + 1);
        arr.push(rando);
    }
    return arr;
}

function getProfit(arr) {
    let maxProfit = -1;
    for (let s = 1; s < arr.length; s++) {
        for (let b = 0; b < s; b++) {
            let profit = arr[s] - arr[b];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    if (maxProfit <= 0) {
        return -1;
    } else {
        return maxProfit;
    }
}


function generateTest(days) {
    let stockArray = createArray(days);
    let profit = getProfit(stockArray);  
    return [stockArray, profit];    
}