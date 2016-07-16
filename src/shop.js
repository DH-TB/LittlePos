function Shop(name) {
    this._name = name;
}

Shop.prototype.store = function(items) {
    this._items = items;
};

Shop.prototype.promotion = function(promotions) {
    this._promotions = promotions;
};

module.exports = Shop;
