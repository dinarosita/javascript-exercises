const maxProfit = require('./maxProfit')

describe('stock', () => {
    test('1. No stock', () => {
        expect(maxProfit([])).toEqual(0);
    });
    test('2. Only 1 stock', () => {
        expect(maxProfit([5])).toEqual(0);
    });
    test('3. Only 2 stock, equal', () => {
        expect(maxProfit([5, 5])).toEqual(0);
      });
    test('4. Only 2 stock, going up', () => {
        expect(maxProfit([2, 5])).toEqual(3);
    });
    test('5. Only 2 stock, going down', () => {
        expect(maxProfit([5, 2])).toEqual(0);
    });
    test('6. Flat forever', () => {
        expect(maxProfit([5, 5, 5, 5, 5])).toEqual(0);
    });
    test('7. Going up forever', () => {
        expect(maxProfit([1, 2, 3, 4, 5])).toEqual(4);
    });
    test('8. Going down forever', () => {
        expect(maxProfit([5, 4, 3, 2, 1])).toEqual(0);
    });
    test('9. Simple random', () => {
        expect(maxProfit([5, 3, 4, 7, 2])).toEqual(4);
    });
    test('10. Going down then up but always lower than first', () => {
        expect(maxProfit([5, 4, 3, 2, 1, 2, 3, 4])).toEqual(3);
    });
    test('11. Lower peak but higher profit later on', () => {
        expect(maxProfit([5, 5, 4, 7, 5, 3, 2, 6, 5, 4])).toEqual(4);
    });
    test('12. Created with testGenerator - 1', () => {
        expect(maxProfit([40, 91, 7, 60, 9])).toEqual(53);
    });
    test('13. Created with testGenerator - 2', () => {
        expect(maxProfit([7, 92, 85, 34, 97, 58, 17, 14, 21, 48])).toEqual(90);
    });
    test('14. Created with testGenerator - 3', () => {
        expect(maxProfit([30, 70, 99, 26, 50, 36, 82, 88, 56, 73])).toEqual(69);
    });
    test('15. Created with testGenerator - 4', () => {
        expect(maxProfit([98, 17, 11, 46, 36])).toEqual(35);
    });
    test('16. Created with testGenerator - 5', () => {
        expect(maxProfit([44, 78, 2, 63, 40])).toEqual(61);
    });
    test('17. Leetcode error- 1', () => {
        expect(maxProfit([2,1,2,1,0,1,2])).toEqual(2);
    });
});
