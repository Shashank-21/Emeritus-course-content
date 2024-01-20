const chai = require('chai');
const assert = chai.assert;

const basePath = `/home/codio/workspace`;

const filePath = `${basePath}/task-04/task-04.js`;

const { calculateDiscountedPrices } = require(filePath);

describe('Discount Code and Prices Validation Test', () => {
    it('Coupon code and prices test', () => {
        const productPrices = [10.99, 15.99, 20.99, 25.99];
        const testCases = [{
                testCode: "DISCOUNT20",
                expectedPrices: productPrices.map((price) => (price - (price * 0.8)).toFixed(2)),
                discount: 0.8,
            },
            {
                testCode: "INVALIDCODE",
                expectedPrices: productPrices.map((price) => (price - (price * 1)).toFixed(2)),
                discount: 1,
            },
            {
                testCode: "SALE15",
                expectedPrices: productPrices.map((price) => (price - (price * 0.85)).toFixed(2)),
                discount: 0.85,
            }
        ];

        testCases.forEach((testCase, index) => {
            const {
                testCode,
                expectedPrices,
                discount
            } = testCase;

            

            const resultPrices = calculateDiscountedPrices(productPrices, discount).map(price => price.toFixed(2));

            expectedPrices.forEach((expectedPrice, i) => {
                assert.equal(resultPrices[i], expectedPrice, `Test case ${index + 1}, product ${i + 1}: Expected discounted price to be ${expectedPrice}, but got ${resultPrices[i]}`);
            });
        });
    });
});
