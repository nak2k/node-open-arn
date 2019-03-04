const { arn2url } = require('arn2url');
const opn = require('opn');

function opnArn(arn, callback) {
  const [err, url] = arn2url(arn);

  if (err) {
    return callback(err);
  }

  opn(url, { wait: false })
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
exports.opn = opn;
exports.opnArn = exports.openArn = opnArn;
