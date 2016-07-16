function strategy(basketItem, typeName) {
    var discount = Math.floor(basketItem.amount / 3) * basketItem.item.price;
    basketItem.setDiscount(discount, typeName);
}

module.exports = strategy;
