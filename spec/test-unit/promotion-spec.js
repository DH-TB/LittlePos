var Promotion = require('../../src/promotion');

describe('Promotion', function () {
    it('constructor', function () {
        var promotion = require('../fixtures/promotion.json');
        expect(new Promotion(promotion)._promotion).toEqual(promotion);
    });
});
