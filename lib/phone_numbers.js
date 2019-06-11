const { PhoneNumberFormat, PhoneNumberUtil } = require('google-libphonenumber');

exports.isValidE164 = (phoneNumber) => {
  const phoneUtil = PhoneNumberUtil.getInstance();
  try {
    return phoneUtil.isValidNumber(phoneUtil.parse(phoneNumber));
  } catch (error) {
    return false;
  }
}

exports.normalizeToE164 = (phoneNumber, country) => {
  const phoneUtil = PhoneNumberUtil.getInstance();
  try {
    var parsed = phoneUtil.parse(phoneNumber, country);
  } catch (error) {
    return null;
  }
  if (phoneUtil.isValidNumberForRegion(parsed, country)) {
    return phoneUtil.format(parsed, PhoneNumberFormat.E164);
  }
  return null;
}
