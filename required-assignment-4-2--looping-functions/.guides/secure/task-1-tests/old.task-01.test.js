jest.setTimeout(10000);
const puppeteer = require('puppeteer');

async function performTest(page, testCases) {
	const errors = [];
	const {
		testNumberOfAisles,
		aisleNames
	} = testCases;
	await page.goto(`https://${process.env.CODIO_BOX_DOMAIN}/task-01/index.html`);
	await page.$eval('#aisleNumberInput', (el, value) => el.value = value, testNumberOfAisles);
	await page.$eval('#aisleNumberInput', el => el.dispatchEvent(new Event('change')));
	await page.click('#generateButton');
	const aisles = await page.$$eval('.aisle-label', aisles => aisles.map(el => el.textContent));
	
	try {
		expect(aisles.length).toBe(testNumberOfAisles);
	} catch (error) {
		errors.push(`Expected ${testNumberOfAisles} aisles, but found ${aisles.length}`);
	}

	// Check the text of each aisle
	aisles.forEach((aisleText, index) => {
		const [aisleNumber, aisleName] = aisleText.split(': ');
		try {
			expect(aisleNumber).toBe(`Aisle ${index+1}`);
		} catch (error) {
			errors.push(`Aisle ${index + 1} doesn't have the right aisle number mentioned. It should be 'Aisle ${index + 1}'. Instead it is ${aisleNumber}`);
		}
		try {
			expect(aisleNames).toContain(aisleName);
		} catch (error) {
			errors.push(`Aisle ${index + 1} does not have a name in the list ${JSON.stringify(aisleNames)}`);
		}
	});

	if(errors.length) {
		throw new Error(errors.join('\n') + "\n\n");
	}
}

describe('Grocery Assistant Aisle Label test', () => {
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

	test('Aisle Label test', async () => {
		const testCase = {
			testNumberOfAisles: 8,
			aisleNames: ['Fruits', 'Vegetables', 'Dairy', 'Bakery', 'Beverages', 'Meat', 'Seafood', 'Frozen Foods', 'Snacks', 'Cereals']
		}
		await performTest(page, testCase);
	});
});