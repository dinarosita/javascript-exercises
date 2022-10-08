var maxProfit = function (prices) {
    let lowestPrice;
    let lastPrice;
    let maxProf;    
    
    let profit = prices.reduce((tempArray, currentVal) => {
        let todayMaxProfit;
        if (!lowestPrice) {
            lowestPrice = currentVal;
        } else {
            let profitFromLowest = currentVal - lowestPrice;
            let profitFromLast = currentVal - lastPrice;

            if (profitFromLast > profitFromLowest) {
                todayMaxProfit = profitFromLast;
            } else {
                todayMaxProfit = profitFromLowest;
            }

            if (!maxProf || todayMaxProfit > maxProf) {
                maxProf = todayMaxProfit;
            }

            if (lastPrice < lowestPrice) {
                lowestPrice = lastPrice;
            }
        } 

        // for all
        lastPrice = currentVal;  
        return [lowestPrice, lastPrice, maxProf]

    }, [])    

    if (profit[2] > 0) {
        return profit[2];
    } else {
        return 0;
    }
};
