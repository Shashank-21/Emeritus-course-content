jest.setTimeout(10000);
const puppeteer = require('puppeteer');

async function performTest(page, testCases) {
	const errors = [];
	for(const testCase of testCases) {
		const {
			testCode,
			expectedPrices
		} = testCase;

		await page.goto(`https://${process.env.CODIO_BOX_DOMAIN}/task-04/index.html`);
		await page.$eval('#discountCodeInput', (el, value) => el.value = value, testCode);
		await page.click('#submitCodeButton');

		const resultText = await page.$eval('#result p', el => el.textContent);
		const pricesText = await page.$$eval('.price-item', elements => elements.map(el => el.textContent));

		expectedPrices.forEach((expectedPrice, index) => {
			try {
				expect(pricesText[index].includes(expectedPrice)).toBe(true);
			} catch (error) {
				errors.push(`At index${index}, expected the discounted price to be ${expectedPrice}, but the text "${pricesText[index]}" does not include it.`)
			}
		});
	}

	if(errors.length) {
		throw new Error(errors.join('\n') + "\n\n");
	}
}

describe('Discount Code and Prices Validation Test', () => {
	let browser;
	let page;

	beforeEach(async () => {
		browser = await puppeteer.launch({
			headless: "new"
		});
		page = await browser.newPage();
	});

	afterEach(async () => {
		await browser.close();
	});

	test('Coupon code and prices test', async () => {
		const productPrices = [10.99, 15.99, 20.99, 25.99];
		const testCases = [{
				testCode: "DISCOUNT20",
				expectedPrices: productPrices.map((price) => {
					const discountedPrice = price * 0.8
					return `$${discountedPrice.toFixed(2)}`
				})
			},
			{
				testCode: "INVALIDCODE",
				expectedPrices: productPrices.map((price) => {
					const discountedPrice = price * 1
					return `$${discountedPrice.toFixed(2)}`
				})
			},
			{
				testCode: "SALE15",
				expectedPrices: productPrices.map((price) => {
					const discountedPrice = price * 0.85
					return `$${discountedPrice.toFixed(2)}`
				})
			}
		];

		await performTest(page, testCases);
	});
});