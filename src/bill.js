var BasketItems = require('./basket-items');

function Bill() {
    this._items = [];
}

Bill.prototype.add = function(item, amount) {
    this._items.push(new BasketItems(item, amount));
};
Bill.prototype.items = function() {
    return this._items;
};

module.exports = Bill;
