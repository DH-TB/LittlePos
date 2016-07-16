var noDiscount = require('./promotions/no-discount');
var buyThreeGetOneFree = require('./promotions/buy-three-get-one-free');

var DiscountStrategyFactory = {
    create: function(type) {
        switch(type) {
            case 'BUY_THREE_GET_ONE_FREE':
                return buyThreeGetOneFree;
            default:
                return noDiscount;
        }
    }
};

module.exports = DiscountStrategyFactory;
