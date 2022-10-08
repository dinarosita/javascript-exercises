// to generate data for testing: 
// generateTest();
// Result is array with 2 elements. First element is the stock array, second is max profit.
// DOESN'T WORK!!! failed at camel: [40, 91, 7, 60, 9] gives 51. Should be 53.

function createArray() {
    let arr = [];

    for (let i = 1; i <= 5; i++) {
        let rando = Math.floor(Math.random() * 100 + 1);
        arr.push(rando);
    }
    return arr;
}

function getMax(arr) {
    return arr.reduce((maxArray, current, index) => {
        if (index === 1 || current >= maxArray[0]) {
            maxArray[0] = current;
            maxArray[1] = index;
        }
        return maxArray;
    }, []) 
}

function getProfit(arr) {
    let maximum = getMax(arr);
    let sellPrice = maximum[0];
    let buyPrice = arr[0];

    for (let i = 1; i < maximum[1]; i++) {
        if (arr[i] < buyPrice) {
            buyPrice = arr[i]
        }
    }

    let profit = sellPrice - buyPrice;

    if (profit < 1) {
        return -1;
    } else {
        return profit;
    }
}

function generateTest() {
    let stockArray = createArray();
    let profit = getProfit(stockArray);  
    return [stockArray, profit];    
}