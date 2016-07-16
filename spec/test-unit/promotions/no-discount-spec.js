var BasketItems = require('../../../src/basket-items');
var noDiscount = require('../../../src/promotions/no-discount');

describe('BuyThreeGetOneFree', function () {
    var item0;
    beforeEach(function() {
        item0 = require('../../fixtures/item000000.json');
    });
    it('set no discount', function () {
        var item = new BasketItems(item0, 2);
        spyOn(item, 'setDiscount');
        noDiscount(item);
        expect(item.setDiscount).toHaveBeenCalledWith(0);
    });
});
