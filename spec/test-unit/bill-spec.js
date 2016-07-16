var Bill = require('../../src/bill');

describe('Bill', function () {
    describe('#add', function () {
        it('add single item', function () {
            var bill = new Bill();
            bill.add('ITEM000000');
            expect(bill._items).toEqual([{
                itemId: 'ITEM000000',
                itemAmount: 1
            }]);
        });
    });

    describe('#items', function () {
        it('returns all items', function () {
            var bill = new Bill();
            bill.add('ITEM000000');

            expect(bill.items()).toEqual([{
                itemId: 'ITEM000000',
                itemAmount: 1
            }]);
        });
    });
});
