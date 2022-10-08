const stock = function (stockPrice) {
    let low;
    let high;
    
    let profit = stockPrice.reduce((tempArray, current) => {
        if (!low) {
            low = current;
        } else if (!high) {
            high = current;
        } else {
            let price1 = low;
            let price2 = high;
            let price3 = current;
            if (price3 > price2) {
                high = price3;
                if (price2 < price1) {
                    low = price2;
                }
            }
        }
        return [low, high]
    }, [])    
    
    if ((profit[0] >= profit[1]) || !profit[0] || !profit[1]) {
        return -1;
    } else {
        return profit[1] - profit[0];
    }
};

module.exports = stock;
