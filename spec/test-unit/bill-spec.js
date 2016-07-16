var Bill = require('../../src/bill');
var BasketItems = require('../../src/basket-items');

describe('Bill', function () {
    var item0, item1, bill;
    beforeEach(function () {
        bill = new Bill();
        item0 = require('../fixtures/item000000.json');
        item1 = require('../fixtures/item000001.json');
    });

    describe('#add', function () {
        it('add single item', function () {
            bill.add(item0, 1);
            expect(bill._items).toEqual([new BasketItems(item0, 1)]);
        });
    });

    describe('#items', function () {
        it('returns all items', function () {
            bill.add(item0, 2);

            expect(bill.items()).toEqual([new BasketItems(item0, 2)]);
        });
    });

    describe('#toString', function () {
        it('print items info and total price', function () {
            bill.add(item0, 3);
            bill.add(item1, 5);

            expect(bill.toString()).toEqual(
                '名称：可口可乐，数量：3瓶，单价：3.00(元)，小计：9.00(元)\n' +
                '名称：羽毛球，数量：5个，单价：1.00(元)，小计：5.00(元)\n' +
                '----------------------\n' +
                "总计：14.00(元)"
            )
        });
    });
});
