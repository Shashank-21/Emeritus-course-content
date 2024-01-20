const fs = require('fs');
const path = require('path');
const testResultFile = path.resolve(__dirname, 'test-results-3.json')
const testResultData = JSON.parse(fs.readFileSync(testResultFile))
if(testResultData.numFailedTests > 0) {
	console.log(testResultData.testResults.filter((result) => result.status === 'failed').map((result) => result.assertionResults.filter((result) => result.status === "failed").reduce((acc, curr) => {
		return `${acc}${curr.failureMessages[0].split("\n\n\n")[0].replace("Error: ","")}\n`
	}, '')).join(''))
	process.exit(1);
} else {
	console.log("Great job!");
	process.exit(0);
}