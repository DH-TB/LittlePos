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


Bill.prototype.applyPromotion = function (promotion) {
    this._promotion = promotion;
    this._items.forEach(function(item) {
        if(promotion.checkItem(item)) {
            promotion.discountStrategy(item);
        }
    });
};

Bill.prototype.toString = function () {
    var lineText = '\n----------------------\n';

    var itemInfoText = this._items.map(function (basketItems) {
        return basketItems.toString();
    }).join('\n');

    var totalDiscount = this._totalDiscount();
    var discountDetails =  totalDiscount ? '单品打折商品：\n' + this._items.filter(function(basketItems) {
        return basketItems.getDiscount();
    }).map(function(basketItems) {
        return basketItems.discountDetails();
    }).join('\n') + lineText : '';

    var totalPrice = '总计：' + this._totalPrice().toFixed(2) + '(元)';

    var discountPrice = totalDiscount ? '\n节省：' + totalDiscount.toFixed(2) + '(元)' : '';
    return itemInfoText + lineText + discountDetails + totalPrice + discountPrice;
};

Bill.prototype._totalPrice = function () {
    return this._items.reduce(function(total, current) {
        return total + current.price();
    }, 0);
};

Bill.prototype._totalDiscount = function () {
    return this._items.reduce(function(total, current) {
        return total + current.getDiscount();
    }, 0);
};

module.exports = Bill;
