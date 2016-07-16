var BasketItems = require('../../src/basket-items');

describe('BasketItems', function () {
    it('returns correct item text', function () {
        var item0 = require('../fixtures/item000000.json');
        var basketItems = new BasketItems(item0, 3);
        expect(basketItems.toString()).toEqual('名称：可口可乐，数量：3瓶，单价：3.00(元)，小计：9.00(元)');
    });
});
