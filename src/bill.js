function Bill() {
    this._items = [];
}

Bill.prototype.add = function(item) {
    this._items.push({
        itemId: item,
        itemAmount: 1
    });
};
Bill.prototype.items = function() {
    return this._items;
};

module.exports = Bill;
