var BasketItems = require('../../../src/basket-items');
var buyThreeGetOneFree = require('../../../src/promotions/buy-three-get-one-free');

describe('BuyThreeGetOneFree', function () {
    var item0;
    beforeEach(function() {
        item0 = require('../../fixtures/item000000.json');
    });
    it('set no discount when amount == 2', function () {
        var item = new BasketItems(item0, 2);
        spyOn(item, 'setDiscount');
        buyThreeGetOneFree(item, '买三免一');
        expect(item.setDiscount).toHaveBeenCalledWith(0, '买三免一');
    });
    it('set 1 discount when amount == 3', function () {
        var item = new BasketItems(item0, 3);
        spyOn(item, 'setDiscount');
        buyThreeGetOneFree(item, '买三免一');
        expect(item.setDiscount).toHaveBeenCalledWith(item0.price, '买三免一');
    });
    it('set 1 discount when amount == 5', function () {
        var item = new BasketItems(item0, 5);
        spyOn(item, 'setDiscount');
        buyThreeGetOneFree(item, '买三免一');
        expect(item.setDiscount).toHaveBeenCalledWith(item0.price, '买三免一');
    });
    it('set 2 discount when amount == 6', function () {
        var item = new BasketItems(item0, 6);
        spyOn(item, 'setDiscount');
        buyThreeGetOneFree(item, '买三免一');
        expect(item.setDiscount).toHaveBeenCalledWith(item0.price * 2, '买三免一');
    });
});
