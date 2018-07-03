const { opnArn } = require('./index');

function main() {
  const [, , ...arns] = process.argv;

  if (!arns.length) {
    showUsage();
    return process.exit(1);
  }

  for (const arn of arns) {
    opnArn(arn, err => {
      if (err) {
        return exitOnError(err);
      }
    });
  }
}

function showUsage() {
  console.error('USAGE: opn-arn <ARN...>');
}

function exitOnError(err) {
  if (err) {
    showError(err);
    return process.exit(1);
  }
}

function showError(err) {
  console.error(`[${'ERROR'}] ${err.message}`);

  if (process.env.DEBUG) {
    console.error();
    console.error(err);
  }
}

main();
