var Shop = require('../../src/shop');
var Bill = require('../../src/bill');
var Promotion = require('../../src/promotion');

describe('Shop', function () {
    var shop;
    var item0, item1;
    beforeEach(function() {
        shop = new Shop('FooShop');
        item0 = require('../fixtures/item000000.json');
        item1 = require('../fixtures/item000001.json');
    });

    describe('#constructor', function () {
        it('has name', function () {
            expect(shop._name).toEqual('FooShop');
        });
    });

    describe('#store', function () {
        it('stores items', function () {
            var items = [
                require('../fixtures/item000000.json')
            ];
            shop.store(items);

            expect(shop._items).toEqual(items);
        });
    });

    describe('#promotion', function () {
        it('has promotion', function () {
            var promotion = require('../fixtures/promotion.json');
            shop.promotion(promotion);
            expect(shop._promotion).toEqual(new Promotion(promotion));
        });
    });

    describe('#scan', function () {
        var bill;
        beforeEach(function() {
            bill = jasmine.createSpyObj('bill', ['add']);
            shop.store([item0, item1]);
        });
        it('inputs single item with 1 amount', function () {
            shop.scan(bill, ['ITEM000000']);
            expect(bill.add).toHaveBeenCalledWith(item0, 1);
        });

        it('inputs single item with multiple amount', function () {
            shop.scan(bill, ['ITEM000000-2']);
            expect(bill.add).toHaveBeenCalledWith(item0, 2);
        });

        it('inputs multiple items', function () {
            shop.scan(bill, ['ITEM000000-2', 'ITEM000001']);

            expect(bill.add.calls.count()).toEqual(2);
            expect(bill.add.calls.argsFor(0)).toEqual([item0, 2]);
            expect(bill.add.calls.argsFor(1)).toEqual([item1, 1]);
        });
    });

    describe('#printReceipt', function () {
        it('prints bill text', function () {
            var bill = jasmine.createSpyObj('bill', ['toString']);
            bill.toString.and.returnValue('This is bill text');
            expect(shop.printReceipt(bill)).toEqual('***<FooShop>购物清单***\nThis is bill text\n**********************');
        });
    });

    describe('#discount', function () {
        it('pass promotion to bill', function () {
            var bill = jasmine.createSpyObj('bill', ['applyPromotion']);

            var promotion = require('../fixtures/promotion.json');
            shop.promotion(promotion);

            shop.discount(bill);

            expect(bill.applyPromotion).toHaveBeenCalledWith(new Promotion(promotion));
        });
    });
});
