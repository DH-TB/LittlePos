var Shop = require('../../src/shop');
var Bill = require('../../src/bill');

describe('Shop', function () {
    describe('#constructor', function () {
        it('has name', function () {
            var shop = new Shop('FooShop');
            expect(shop._name).toEqual('FooShop');
        });
    });

    describe('#store', function () {
        it('stores items', function () {
            var shop = new Shop('FooShop');
            var items = [{
                barcode: 'ITEM000000',
                name: '可口可乐',
                unit: '瓶',
                category: '食品',
                subCategory: '碳酸饮料',
                price: 3.00
            }];
            shop.store(items);

            expect(shop._items).toEqual(items);
        });
    });

    describe('#promotion', function () {
        it('has promotion', function () {
            var shop = new Shop('FooShop');
            var promotions = [{
                type: 'BUY_THREE_GET_ONE_FREE',
                name: '买三免一',
                barcodes: [
                    'ITEM000000',
                    'ITEM000001'
                ]
            }];
            shop.promotion(promotions);
            expect(shop._promotions).toEqual(promotions);
        });
    });

    describe('#scan', function () {
        var shop, bill;
        beforeEach(function() {
            shop = new Shop('FooShop');
            bill = jasmine.createSpyObj('bill', ['add']);
        });
        it('inputs single item with 1 amount', function () {
            shop.scan(bill, ['ITEM000000']);
            expect(bill.add).toHaveBeenCalledWith('ITEM000000');
        });

        it('inputs single item with multiple amount', function () {
            shop.scan(bill, ['ITEM000000-2']);
            expect(bill.add.calls.count()).toEqual(2);
            expect(bill.add.calls.argsFor(0)).toEqual(['ITEM000000']);
            expect(bill.add.calls.argsFor(1)).toEqual(['ITEM000000']);
        });

        it('inputs multiple items', function () {
            shop.scan(bill, ['ITEM000000-2', 'ITEM000001']);

            expect(bill.add.calls.count()).toEqual(3);
            expect(bill.add.calls.argsFor(0)).toEqual(['ITEM000000']);
            expect(bill.add.calls.argsFor(1)).toEqual(['ITEM000000']);
            expect(bill.add.calls.argsFor(2)).toEqual(['ITEM000001']);
        });


    });
});
