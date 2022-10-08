const maxProfit = function (prices) {   
    let priceLowest = prices[0];
    let profitMax = 0;

    for (let i = 1; i < prices.length; i++) {
       
        if (prices[i-1] < priceLowest) {
            priceLowest = prices[i-1];
        }

        let profitToday = prices[i] - priceLowest;
                
        if (profitToday > profitMax) {
            profitMax = profitToday;
        }
    }
    return profitMax;
};

module.exports = maxProfit;
