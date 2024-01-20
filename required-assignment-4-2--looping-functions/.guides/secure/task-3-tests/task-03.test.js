const chai = require('chai');
const assert = chai.assert;

const basePath = `/home/codio/workspace`;

const filePath = `${basePath}/task-03/task-03.js`;

const { checkCodeValidity } = require(filePath);

describe('Discount Code Validation Test', () => {
    it('Coupon code test', () => {
        const testCases = [{
                testCode: "DISCOUNT20",
                expectedResult: "Coupon found!"
            },
            {
                testCode: "INVALIDCODE",
                expectedResult: "Coupon not found"
            },
            {
                testCode: "SALE15",
                expectedResult: "Coupon found!"
            }
        ];

        const availableCodes = ["DISCOUNT20", "SALE15", "OFFER10"];

        testCases.forEach((testCase, index) => {
            const {
                testCode,
                expectedResult
            } = testCase;

            const result = checkCodeValidity(testCode, availableCodes);

            assert.include(result.resultString, expectedResult, `Test case ${index + 1}: Expected result for code '${testCode}' to be '${expectedResult}', but found '${result}'`);
        });
    });
});
