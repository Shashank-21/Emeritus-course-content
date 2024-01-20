jest.setTimeout(30000);
const puppeteer = require('puppeteer');

async function performTest(page, testCases) {
	const errors = [];
	for(const testCase of testCases) {
		const {
			testTotalItems,
			testItemsPerTrip,
			expectedNumberOfTrips,
			expectedItemsInLastTrip
		} = testCase;
		await page.goto(`https://${process.env.CODIO_BOX_DOMAIN}/task-02/index.html`);
		await page.$eval('#totalItemsInput', (el, value) => el.value = value, testTotalItems);
		await page.$eval('#totalItemsInput', el => el.dispatchEvent(new Event('change')));
		await page.$eval('#itemsPerTripInput', (el, value) => el.value = value, testItemsPerTrip);
		await page.$eval('#itemsPerTripInput', el => el.dispatchEvent(new Event('change')));
		await page.click('#restockButton');
		const restockingItems = await page.$$eval('.restocking-item', restockingItem => restockingItem.map(el => el.textContent));
		try {
			expect(restockingItems.length).toBe(expectedNumberOfTrips);
		} catch (error) {
			errors.push(`Expected ${expectedNumberOfTrips} trips, but found ${restockingItems.length}`);
		}
		if(restockingItems.length) {
			try {
				expect(restockingItems[restockingItems.length - 1]).toContain(`${expectedItemsInLastTrip}`);
			} catch (error) {
				`Expected the last trip to contain ${expectedItemsInLastTrip} items, but it doesn't`
			}
		}

	}
	if(errors.length) {
		throw new Error(errors.join('\n') + "\n\n");
	}
}

describe('Grocery Assistant Restocking test', () => {
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

	test('Restocking test', async () => {
		const testCases = [];
		for(let i = 1; i <= 3; i++) {
			const testTotalItems = Math.floor(Math.random() * 500) + 1;
			const testItemsPerTrip = Math.floor(Math.random() * 25) + 1;
			const expectedNumberOfTrips = Math.ceil(testTotalItems / testItemsPerTrip);
			const expectedItemsInLastTrip = testTotalItems % testItemsPerTrip === 0 ? testItemsPerTrip : testTotalItems % testItemsPerTrip;
			testCases.push({
				testTotalItems,
				testItemsPerTrip,
				expectedNumberOfTrips,
				expectedItemsInLastTrip
			})
		}
		await performTest(page, testCases);
	});
});