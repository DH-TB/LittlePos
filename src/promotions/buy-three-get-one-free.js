function strategy(basketItem) {
    var discount = Math.floor(basketItem.amount / 3) * basketItem.item.price;
    basketItem.setDiscount(discount);
}

module.exports = strategy;
