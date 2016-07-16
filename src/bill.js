function Bill() {
    this._items = [];
}

Bill.prototype.add = function(item, amount) {
    this._items.push({
        item: item,
        amount: amount
    });
};
Bill.prototype.items = function() {
    return this._items;
};

module.exports = Bill;
