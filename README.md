# Satcomma Javascript Library

Small library that converts values either in Bitcoin, Satoshis or [BIP-0176 Bits](https://github.com/bitcoin/bips/blob/master/bip-0176.mediawiki), into the proposed [Satcomma Standard](https://medium.com/coinmonks/the-satcomma-standard-89f1e7c2aede) notation format.

## Methods
Each method takes in one javascript number argument wand returns a string. Methods includes are:
```
satcomma.fromBitcoin(number): string
```
```
satcomma.fromSats(number): string
```
```
satcomma.fromBits(number): string
```

## Example use

```Javascript
const satcomma = require('satcomma');

satcomma.fromBitcoin(6.15000001) // => "6.15,000,001"

satcomma.fromSats(698000) // => "0.00,698,000"

satcomma.fromBits(698) // => "0.00,698,000"
```

## Error handling
- For each method the number input is not larger than the maximum amount of satoshis allowed my the Bitcoin system aka (21000000 * 1e8). If so a TypeError will be raised.
- fromSats() will error if the satoshi input is an integer.
- fromBits() will error if a float is provided with a decimal precision of more than 2.

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