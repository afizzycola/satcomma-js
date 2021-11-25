# Satcomma Javascript Library
Small library that converts values either in Bitcoin, Satoshis or [BIP-0176 Bits](https://github.com/bitcoin/bips/blob/master/bip-0176.mediawiki), into the proposed [Satcomma Standard](https://medium.com/coinmonks/the-satcomma-standard-89f1e7c2aede) notation format.

![npm](https://img.shields.io/npm/v/satcomma)
## Methods
Each method takes in a 
- mandatory javascript number argument.
- optional options object which has the following structure:
```javascript
{
    decimalDelimiter?: string, // default = ',' (comma). Delimiter can be whatever you want.
    integerDelimiter?: string, // default = '' (no delimiter). Delimiter can be whatever you want.
    validateBitcoinMaxSupply?: boolean //default = true
}

```
Methods include
```
satcomma.fromBitcoin(number, object?): string
```
```
satcomma.fromSats(number, object?): string
```
```
satcomma.fromBits(number, object?): string
```

## Example use

```Javascript
const satcomma = require('satcomma');

satcomma.fromBitcoin(6.15000001) // => "6.15,000,001"

satcomma.fromSats(698000) // => "0.00,698,000"

satcomma.fromBits(698) // => "0.00,698,000"

satcomma.fromBitcoin(6.15000001, {decimalDelimiter: " "}) // => "6.15 000 001"

satcomma.fromSats(698000, {decimalDelimiter: "'"}) // => "0.00'698'000"

satcomma.fromBitcoin(698000000000000.15000001, " ", {
    validateBitcoinMaxSupply: false, 
    integerDelimiter = ","
    decimalDelimiter = " "
}) // => "210,000,000,000,000.00 000 000"
```

## Validation
- For each method the number input is not larger than the maximum amount of satoshis allowed my the Bitcoin system aka (21000000 * 1e8). If so a TypeError will be raised.
- fromSats() will error if the satoshi input is an integer.
- fromBits() will error if a float is provided with a decimal precision of more than 2.

## Dependancies
We only have one dependency which is with the small big.js library, which avoids floating point errors when formatting large numbers to satcomma.

## Installation

```
npm install satcomma
```

## Tests
Run tests using:

```
npm test
```
These tests use the Jest test framework.

## LICENSE [MIT](LICENSE)