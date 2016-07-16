var BasketItems = require('../../src/basket-items');

describe('BasketItems', function () {
    var item0;
    beforeEach(function() {
        item0 = require('../fixtures/item000000.json');
    });

    it('increases amount', function () {
        var basketItems = new BasketItems(item0, 3);
        basketItems.increaseAmount(2);
        expect(basketItems.amount).toEqual(5);
    });

    it('returns correct item text', function () {
        var basketItems = new BasketItems(item0, 3);
        expect(basketItems.toString()).toEqual('名称：可口可乐，数量：3瓶，单价：3.00(元)，小计：9.00(元)');
    });

    it('calculate price', function () {
        var basketItems = new BasketItems(item0, 3);
        expect(basketItems.price()).toEqual(9);
    });
});
