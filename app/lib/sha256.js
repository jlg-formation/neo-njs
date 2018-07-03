const crypto = require('crypto');

module.exports = function sha256(str, callback) {
    const hash = crypto.createHash('sha256');
    hash.update(str);
    callback(null, hash.digest('hex'));
};
