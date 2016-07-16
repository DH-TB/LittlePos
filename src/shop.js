function Shop(name) {
    this._name = name;
}

Shop.prototype.store = function(items) {
    this._items = items;
};

Shop.prototype.promotion = function(promotions) {
    this._promotions = promotions;
};

Shop.prototype.scan = function(bill, items) {
    items.forEach(function(item) {
        var itemId = item.split('-')[0];
        var itemAmount = item.split('-')[1] || 1;
        for(var i = 0; i< itemAmount; i++) {
            bill.add(itemId);
        }
    });
};

Shop.prototype.printReceipt = function(bill) {
    return '***<' + this._name + '>购物清单***\n' +
            bill.toString() + '\n' +
            '**********************'
};

module.exports = Shop;
