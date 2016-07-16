function BasketItems(item, amount) {
    this.item = item;
    this.amount = amount;
    this.discount = 0;
}

BasketItems.prototype.increaseAmount = function (amount) {
    return this.amount = this.amount + amount;
};

BasketItems.prototype.price = function () {
    return this.amount * this.item.price - this.discount;
};

BasketItems.prototype.setDiscount = function (discount, discountName) {
    this.discount = discount;
    this.discountName = discountName;
};

BasketItems.prototype.getDiscount = function () {
    return this.discount;
};

BasketItems.prototype.getDiscountName = function () {
    return this.discountName;
};

BasketItems.prototype.toString = function () {
    return '名称：' + this.item.name + '，' +
        '数量：' + this.amount + this.item.unit + '，' +
        '单价：' + this.item.price.toFixed(2) + '(元)，' +
        '小计：' + (this.price()).toFixed(2) + '(元)' +
        (this.discount ? '，优惠' + this.discount.toFixed(2) + '(元)' : '');
};

BasketItems.prototype.discountDetails = function () {
    return '名称：' + this.item.name + '，折扣：' + this.discountName;
};

module.exports = BasketItems;
