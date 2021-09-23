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
function fromBitcoin(valueInBitcoin) {
    checkMaxSatoshis(valueInBitcoin * 1e8);
    const intDecArray = valueInBitcoin.toFixed(8)
        .toString()
        .split('.');
    const int = intDecArray[0];
    const decs = intDecArray[1];
    let result = int;
    result += ".";
    if (decs) {
        result += (decs.substr(0, 2)) ? decs.substr(0, 2).padEnd(2, "0") : "00";
        result += ",";
        result += (decs.substr(2, 3)) ? decs.substr(2, 3).padEnd(3, "0") : "000";
        result += ",";
        result += (decs.substr(5, 3)) ? decs.substr(5, 3).padEnd(3, "0") : "000";
    }
    else {
        result += "00,000,000";
    }
    return result;
}
exports.fromBitcoin = fromBitcoin;
function fromSats(valueInsats) {
    if (!Number.isInteger(valueInsats)) {
        throw new TypeError(errors_1.default.SATS_NOT_INT_ERR);
    }
    // convert satoshis to bitcoin
    return fromBitcoin(valueInsats / 1e8);
}
exports.fromSats = fromSats;
function fromBits(valueInBip176Bits) {
    if (!Number.isInteger(valueInBip176Bits)) {
        const decs = valueInBip176Bits.toString().split('.')[1];
        if (decs.length > 2) {
            throw new TypeError(errors_1.default.BITS_PRECISION_ERR);
        }
    }
    // convert bits to bitcoin
    return fromBitcoin(valueInBip176Bits / 1e6);
}
exports.fromBits = fromBits;
