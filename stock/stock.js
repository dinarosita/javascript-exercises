const stock = function (prices) {
    let priceLow;    // lowest price
    let priceLast;    // previos day price
    let profitMax; // max profit of any time
        
    let profitFinder = prices.reduce((tempArray, priceNow) => {
        let profitToday;   // max profit of today
        if (!priceLow) {
            priceLow = priceNow;
        } else {
            let profitLow = priceNow - priceLow;    // today profit from lowest price
            let profitPre = priceNow - priceLast;    // today profit from previous price

            if (profitPre > profitLow) {
                profitToday = profitPre;
            } else {
                profitToday = profitLow;
            }

            if (!profitMax || profitToday > profitMax) {
                profitMax = profitToday;
            }

            if (priceLast < priceLow) {
                priceLow = priceLast;
            }
        } 
        priceLast = priceNow;  
        return [priceLow, priceLast, profitMax]

    }, [])    

    if (profitFinder[2] > 0) {
        return profitFinder[2];
    } else {
        return 0;
    }
};

module.exports = stock;
