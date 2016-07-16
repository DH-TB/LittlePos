xdescribe('Pos machine', function () {
    it('prints receipt', function () {
        var shop = setupShop();

        shop.scan(['ITEM000000-3', 'ITEM000001-5', 'ITEM000002-2']);

        expect(shop.printReceipt()).toEqual(
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
        var shop = new Shop();
        shop.store([{
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            category: '食品',
            subCategory: '碳酸饮料',
            price: 3.00
        }, {
            barcode: 'ITEM000001',
            name: '羽毛球',
            unit: '个',
            category: '运动器材',
            subCategory: '羽毛球',
            price: 1.00
        }, {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            category: '食品',
            subCategory: '水果',
            price: 1.00
        }]);
        shop.promotion([{
            type: 'BUY_THREE_GET_ONE_FREE',
            barcodes: [
                'ITEM000000',
                'ITEM000001'
            ]
        }]);
        return shop;
    }
});
