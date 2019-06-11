const crypto = require('crypto');
const { normalizeToE164 } = require('./lib/phone_numbers.js');

module.exports = (phoneNumber, country) => {
  const normalized = normalizeToE164(phoneNumber, country);
  if (!normalized) return null;
  const hash = crypto.createHash('sha256');
  hash.update(normalized);
  return hash.digest('hex');
}
