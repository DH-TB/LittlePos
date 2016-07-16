var BasketItems = require('./basket-items');

function Bill() {
    this._items = [];
}

Bill.prototype.add = function (item, amount) {
    var existItem = this._items.filter(function(billItem) { return billItem.item.barcode === item.barcode;}) [0];
    if(existItem) {
        existItem.increaseAmount(amount);
    } else {
        this._items.push(new BasketItems(item, amount));
    }
};

Bill.prototype.items = function () {
    return this._items;
};

Bill.prototype.toString = function () {
    return this._items.map(function (basketItems) {
            return basketItems.toString();
        }).join('\n') +
        '\n----------------------\n' +
        '总计：' + this._totalPrice().toFixed(2) + '(元)';
};

Bill.prototype._totalPrice = function () {
    return this._items.reduce(function(total, current) {
        return total + current.price();
    }, 0);
};

module.exports = Bill;
