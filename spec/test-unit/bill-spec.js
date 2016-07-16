var Bill = require('../../src/bill');
var BasketItems = require('../../src/basket-items');

describe('Bill', function () {
    var item0, item1;
    beforeEach(function () {
        item0 = require('../fixtures/item000000.json');
        item1 = require('../fixtures/item000001.json');
    });

    describe('#add', function () {
        it('add single item', function () {
            var bill = new Bill();
            bill.add(item0, 1);
            expect(bill._items).toEqual([new BasketItems(item0, 1)]);
        });
    });

    describe('#items', function () {
        it('returns all items', function () {
            var bill = new Bill();
            bill.add(item0, 2);

            expect(bill.items()).toEqual([new BasketItems(item0, 2)]);
        });
    });
});
