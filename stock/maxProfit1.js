const maxProfit = function (prices) {
         
    let profinator = prices.reduce((profArr, priceNow, index) => {
        if (index === 0) {
            profArr[0] = priceNow;
        } else {
            let profitToday;
            if (profArr[0] < profArr[1]) {
                profitToday = priceNow - profArr[0];
            } else {
                profitToday = priceNow - profArr[1];
            }

            if (index === 1 || profitToday > profArr[2]) {
                profArr[2] = profitToday;
            }

            if (profArr[1] < profArr[0]) {
                profArr[0] = profArr[1];
            }
        } 
        profArr[1] = priceNow;  
        return profArr; // [priceLow, priceLast, profitMax]

    }, [])    

    if (profinator[2] > 0) {
        return profinator[2];
    } else {
        return 0;
    }
};

module.exports = maxProfit;
