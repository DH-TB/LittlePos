var Promotion = require('../../src/promotion');
var BasketItems = require('../../src/basket-items');

describe('Promotion', function () {
    var promotionData, promotion, basketItem1, basketItem2;
    beforeEach(function() {
        basketItem1 = new BasketItems(require('../fixtures/item000000.json'), 2);
        basketItem2 = new BasketItems({barcode: 'NO-DISCOUNT'}, 1);
        promotionData = require('../fixtures/promotion.json');
        promotion = new Promotion(promotionData);
    });

    it('constructor', function () {
        expect(promotion._promotion).toEqual(promotionData);
    });

    it('detects item need discount or not', function () {
        expect(promotion.checkItem(basketItem1)).toBeTruthy();
        expect(promotion.checkItem(basketItem2)).toBeFalsy();
    });
});
