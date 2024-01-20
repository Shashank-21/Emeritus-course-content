module.exports = function(runner) {
  const failures = [];
  const pass = [];

  runner.on('fail', function (test, err) {
    failures.push({
      title: test.title,
      error: err.message,
      file: test.file
    });
  });

  runner.on('pass', function (test, err) {
    pass.push({
      title: test.title,
      file: test.file
    });
  });

  runner.on('end', function () {
    console.log(`(&#x2713;) ${pass.length} testcases cleared`);
    console.log(`(&#10005;) ${failures.length} testcases failing\n`);


    if(failures.length || pass.length) {
      console.log(`Details:`);
    }
    
    if(failures.length) {
      console.log(`---------`)
      console.log(`Failed tasks: \n`)
      failures.forEach((failure, idx) => {
      console.error(`${idx+1}). Task: ${failure.title}\n`);
      console.error(` - Error: ${failure.error}\n\n`);
    });
    }

    if(pass.length) {
      console.log(`---------`)
      console.log(`Cleared tasks: \n`)
      pass.forEach((pass, idx) => {
      console.info(`${idx+1}). Task: ${pass.title}\n`);
    });
    }
  });
};