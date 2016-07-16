var Shop = require('../../src/shop');

describe('Shop', function () {
    describe('#constructor', function () {
        it('has name', function () {
            var shop = new Shop('FooShop');
            expect(shop.name).toEqual('FooShop');
        });
    });
});
