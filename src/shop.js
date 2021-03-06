var Promotion = require('./promotion');

function Shop(name) {
    this._name = name;
}

Shop.prototype.store = function(items) {
    this._items = items;
};

Shop.prototype.promotion = function(promotion) {
    this._promotion = new Promotion(promotion);
};

Shop.prototype.scan = function(bill, items) {
    var self = this;
    items.forEach(function(item) {
        var barcode = item.split('-')[0];
        var itemAmount = +item.split('-')[1] || 1;

        bill.add(self._getItem(barcode), itemAmount);
    });
};

Shop.prototype.discount = function(bill) {
    bill.applyPromotion(this._promotion);
};

Shop.prototype.printReceipt = function(bill) {
    return '***<' + this._name + '>购物清单***\n' +
            bill.toString() + '\n' +
            '**********************';
};

Shop.prototype._getItem = function(barcode) {
    return this._items.filter(function(item) { return item.barcode === barcode;})[0];
};

module.exports = Shop;
