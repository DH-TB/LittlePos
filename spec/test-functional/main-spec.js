xdescribe('Pos machine', function () {
    it('prints receipt', function () {
        var shop = setupShop();
        var bill = setupBill();

        shop.scan(bill, ['ITEM000000-3', 'ITEM000001-5', 'ITEM000002-2']);

        shop.discount(bill);

        expect(shop.printReceipt(bill)).toEqual(
            "***<没钱赚商店>购物清单***\n" +
            "名称：可口可乐，数量：3瓶，单价：3.00(元)，小计：6.00(元)，优惠3.00(元)\n" +
            "名称：羽毛球，数量：5个，单价：1.00(元)，小计：4.00(元)，优惠1.00(元)\n" +
            "名称：苹果，数量：2斤，单价：5.50(元)，小计：11.00(元)\n" +
            "----------------------\n" +
            "单品打折商品：\n" +
            "名称：可口可乐，折扣：买三免一\n" +
            "名称：羽毛球，折扣：买三免一\n" +
            "----------------------\n" +
            "总计：21.00(元)\n" +
            "节省：4.00(元)\n" +
            "**********************"
        );
    });

    function setupShop() {
        var shop = new Shop('没钱赚商店');
        shop.store([
            require('../fixtures/item000000.json'),
            require('../fixtures/item000001.json'),
            require('../fixtures/item000002.json')
        ]);
        shop.promotion([{
            type: 'BUY_THREE_GET_ONE_FREE',
            name: '买三免一',
            barcodes: [
                'ITEM000000',
                'ITEM000001'
            ]
        }]);
        return shop;
    }

    function setupBill() {
        return new Bill();
    }
});
