jest.setTimeout(10000);
const puppeteer = require('puppeteer');

async function performTest(page, testCases) {
	const errors = [];
	for(const testCase of testCases) {
		const {
			testCode,
			expectedResult
		} = testCase;

		await page.goto(`https://${process.env.CODIO_BOX_DOMAIN}/task-03/index.html`);
		await page.$eval('#discountCodeInput', (el, value) => el.value = value, testCode);
		await page.click('#submitCodeButton');
		const resultsText = await page.$$eval('#result p', elements => elements.map(el => el.textContent))
		const lastResultText = resultsText[resultsText.length - 1] || "";

		try {
			expect(lastResultText.includes(expectedResult)).toBe(true);
		} catch (error) {
			errors.push(`Expected result for code '${testCode}' to be '${expectedResult}', but found '${lastResultText}'`);
		}
	}

	if(errors.length) {
		throw new Error(errors.join('\n') + "\n\n");
	}
}

describe('Discount Code Validation Test', () => {
	let browser;
	let page;

	beforeEach(async () => {
		browser = await puppeteer.launch({
			headless: "new",
		});
		page = await browser.newPage();
	});

	afterEach(async () => {
		await browser.close();
	});

	test('Coupon code test', async () => {
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

		await performTest(page, testCases);
	});
});