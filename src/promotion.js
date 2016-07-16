function Promotion(promotion) {
    this._promotion = promotion;
}

Promotion.prototype.checkItem = function(basketItems) {
    return this._promotion.barcodes.indexOf(basketItems.item.barcode) >= 0;
};

module.exports = Promotion;
