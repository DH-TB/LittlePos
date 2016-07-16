function BasketItems(item, amount) {
    this.item = item;
    this.amount = amount;
}

BasketItems.prototype.price = function() {
    return this.amount * this.item.price;
};

BasketItems.prototype.toString = function() {
    return '名称：' + this.item.name + '，' +
        '数量：' + this.amount + this.item.unit + '，' +
        '单价：' + this.item.price.toFixed(2) + '(元)，' +
        '小计：'+ (this.item.price * this.amount).toFixed(2) + '(元)';
};

module.exports = BasketItems;
