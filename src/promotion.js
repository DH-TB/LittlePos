var DiscountStrategyFactory = require('./discount-strategy-factory');

function Promotion(promotion) {
    this._promotion = promotion;
}

Promotion.prototype.checkItem = function(basketItems) {
    return this._promotion.barcodes.indexOf(basketItems.item.barcode) >= 0;
};
Promotion.prototype.discount = function(basketItems) {
    this.discountStrategy(basketItems, this._promotion.name);
};
Promotion.prototype.discountStrategy = function(discount) {
    DiscountStrategyFactory.create(this._promotion.type)(discount, this._promotion.name);
};

module.exports = Promotion;
