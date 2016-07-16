var DiscountStrategyFactory = require('./discount-strategy-factory');

function Promotion(promotion) {
    this._promotion = promotion;
    this.discountStrategy = DiscountStrategyFactory.create(promotion.type);
}

Promotion.prototype.checkItem = function(basketItems) {
    return this._promotion.barcodes.indexOf(basketItems.item.barcode) >= 0;
};
Promotion.prototype.discount = function(basketItems) {

};

module.exports = Promotion;
