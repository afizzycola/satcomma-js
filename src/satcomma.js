"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromBits = exports.fromSats = exports.fromBitcoin = void 0;
const errors_1 = __importDefault(require("./errors"));
const MAX_SATOSHIS = 21000000 * 1e8;
function checkMaxSatoshis(satoshis) {
    if (satoshis > MAX_SATOSHIS || satoshis < 0) {
        throw new TypeError(errors_1.default.SATS_RANGE_ERR);
    }
}
function fromBitcoin(valueInBitcoin, { lhsDelimiter = '', rhsDelimiter = ',', validateBitcoinMaxSupply = true } = {}) {
    if (validateBitcoinMaxSupply) {
        checkMaxSatoshis(valueInBitcoin * 1e8);
    }
    const intDecArray = valueInBitcoin.toFixed(8)
        .toString()
        .split('.');
    const int = parseInt(intDecArray[0]);
    const decs = intDecArray[1];
    let result = int.toLocaleString('en-US').replace(/,/g, lhsDelimiter); // we use en-US locale to set the default as a comma
    result += ".";
    if (decs) {
        result += (decs.substr(0, 2)) ? decs.substr(0, 2).padEnd(2, "0") : "00";
        result += rhsDelimiter;
        result += (decs.substr(2, 3)) ? decs.substr(2, 3).padEnd(3, "0") : "000";
        result += rhsDelimiter;
        result += (decs.substr(5, 3)) ? decs.substr(5, 3).padEnd(3, "0") : "000";
    }
    else {
        result += `00${rhsDelimiter}000${rhsDelimiter}000`;
    }
    return result;
}
exports.fromBitcoin = fromBitcoin;
function fromSats(valueInSats, { lhsDelimiter = '', rhsDelimiter = ',', validateBitcoinMaxSupply = true } = {}) {
    if (!Number.isInteger(valueInSats)) {
        throw new TypeError(errors_1.default.SATS_NOT_INT_ERR);
    }
    if (validateBitcoinMaxSupply) {
        checkMaxSatoshis(valueInSats);
    }
    let valueArray = valueInSats.toString().split('').reverse();
    valueArray[2] = rhsDelimiter + valueArray[2];
    valueArray[5] = rhsDelimiter + valueArray[5];
    valueArray[7] = '.' + valueArray[7];
    let i = 7 + 3;
    while (i < valueArray.length - 1) {
        valueArray[i] = lhsDelimiter + valueArray[i];
        i += 3;
    }
    // convert satoshis to bitcoin
    //const valueInBitcoin = parseFloat(Math.ceil(valueInSats * 1e-8).toFixed(8))
    //return fromBitcoin(valueInBitcoin, {lhsDelimiter, rhsDelimiter, validateBitcoinMaxSupply})
    return valueArray.reverse().join('');
}
exports.fromSats = fromSats;
console.log(fromSats(2100000000, { lhsDelimiter: '_', validateBitcoinMaxSupply: false }));
function fromBits(valueInBip176Bits, { lhsDelimiter = '', rhsDelimiter = ',', validateBitcoinMaxSupply = true } = {}) {
    if (!Number.isInteger(valueInBip176Bits)) {
        const decs = valueInBip176Bits.toString().split('.')[1];
        if (decs.length > 2) {
            throw new TypeError(errors_1.default.BITS_PRECISION_ERR);
        }
    }
    // convert bits to bitcoin
    const valueInBitcoin = parseFloat((valueInBip176Bits * 1e-6).toFixed(8));
    return fromBitcoin(valueInBitcoin, { lhsDelimiter, rhsDelimiter, validateBitcoinMaxSupply });
}
exports.fromBits = fromBits;
