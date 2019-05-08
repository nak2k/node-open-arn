const { arn2url } = require('arn2url');
const open = require('open');

function opnArn(arn, callback) {
  const [err, url] = arn2url(arn);

  if (err) {
    return callback(err);
  }

  open(url, { wait: false })
    .then(() => {
      callback(null);
    })
    .catch(err => {
      callback(err);
    });
}

/*
 * Exports.
 */
exports.opn = exports.open = open;
exports.opnArn = exports.openArn = opnArn;
