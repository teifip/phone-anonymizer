# phone-anonymizer

Simple phone number anonymizer. The phone number is normalized to [E.164](https://en.wikipedia.org/wiki/E.164) format and then digested into a [SHA-256](https://en.wikipedia.org/wiki/SHA-2) hash.

## Overview

```javascript
const anonymizer = require('phone-anonymizer');

const id = anonymizer('408-750-8800', 'us');

console.log(id);
// a25efcaee1cf6c46ad657c2330aae5f333d7f9aa2510c0232cf8f2303e0764ca
```

### Installation

```
npm install phone-anonymizer --save
```

### Usage

**anonymizer(phoneNumber, country)**

`phoneNumber` is the phone number to be anonymized.

`country` is the [alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the country in which the phone number is valid.

Returns a hex string with the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) of `phoneNumber` after conversion to [E.164](https://en.wikipedia.org/wiki/E.164) format or null if `phoneNumber` is invalid for `country`.
