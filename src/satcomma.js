"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromBits = exports.fromSats = exports.fromBitcoin = void 0;
const errors_1 = __importDefault(require("./errors"));
// we use the big.js library to avoid floating point errors with large numbers
const big_js_1 = __importDefault(require("big.js"));
const MAX_SATOSHIS = 2100000000000000;
function checkMaxSatoshis(satoshis) {
    if (satoshis > MAX_SATOSHIS || satoshis < 0) {
        throw new TypeError(errors_1.default.SATS_RANGE_ERR);
    }
}
function fromBitcoin(valueInBitcoin, { integerDelimiter = '', decimalDelimiter = ',', validateBitcoinMaxSupply = true, decimalPlaces = 8 } = {}) {
    // convert bitcoin to sats
    const valueInSats = new big_js_1.default(valueInBitcoin).times(Math.pow(10, decimalPlaces)).toNumber();
    return fromSats(valueInSats, { integerDelimiter, decimalDelimiter, validateBitcoinMaxSupply, decimalPlaces });
}
exports.fromBitcoin = fromBitcoin;
function fromSats(valueInSats, { integerDelimiter = '', decimalDelimiter = ',', validateBitcoinMaxSupply = true, decimalPlaces = 8 } = {}) {
    // error checking
    if (decimalPlaces < 1)
        throw new TypeError(errors_1.default.ZERO_DECIMAL_PLACES_ERR);
    if (!Number.isInteger(decimalPlaces))
        throw new TypeError(errors_1.default.DECIMAL_PLACE_OPTION_NOT_INT_ERR);
    if (!Number.isInteger(valueInSats))
        throw new TypeError(errors_1.default.SATS_NOT_INT_ERR);
    if (validateBitcoinMaxSupply)
        checkMaxSatoshis(valueInSats);
    const isNegative = valueInSats < 0;
    if (isNegative)
        valueInSats = -valueInSats;
    const valueInSatsString = new big_js_1.default(valueInSats).toFixed(0);
    // using toLocalString risks .0 being returned where the decimal value equal.
    // To prevent this we prefix a 1 to ensure a satcomma formatted output
    // this is later sliced before returning the result
    const decimalString = 1 + valueInSatsString.slice(-decimalPlaces).padStart(decimalPlaces, '0');
    const integerString = valueInSatsString.slice(0, -decimalPlaces) || '0';
    const delimitedDecimalStringUncorrected = BigInt(decimalString).toLocaleString('en-US').replace(/,/g, decimalDelimiter);
    const delimitedIntegerString = BigInt(integerString).toLocaleString('en-US').replace(/,/g, integerDelimiter);
    const delimitedDecimalString = delimitedDecimalStringUncorrected.slice(1);
    const sign = isNegative ? '-' : "";
    return `${sign}${delimitedIntegerString}.${delimitedDecimalString}`;
}
exports.fromSats = fromSats;
function fromBits(valueInBip176Bits, { integerDelimiter = '', decimalDelimiter = ',', validateBitcoinMaxSupply = true, decimalPlaces = 8 } = {}) {
    if (!Number.isInteger(valueInBip176Bits)) {
        const decs = valueInBip176Bits.toString().split('.')[1];
        if (decs.length > 2) {
            throw new TypeError(errors_1.default.BITS_PRECISION_ERR);
        }
    }
    // convert bits to sats
    const valueInSats = new big_js_1.default(valueInBip176Bits).times(100).toNumber();
    return fromSats(valueInSats, { integerDelimiter, decimalDelimiter, validateBitcoinMaxSupply, decimalPlaces });
}
exports.fromBits = fromBits;
// console.log(fromSats(21, {decimalPlaces: 32}))
