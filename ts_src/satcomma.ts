import errors from "./errors";


const MAX_SATOSHIS = 21000000 * 1e8;
function checkMaxSatoshis (satoshis) {
  if (satoshis > MAX_SATOSHIS || satoshis < 0) {
    throw new TypeError(errors.SATS_RANGE_ERR)
  }
}

export function fromBitcoin(valueInBitcoin: number): string {
    checkMaxSatoshis(valueInBitcoin * 1e8);
    const intDecArray = valueInBitcoin.toFixed(8)
        .toString()
        .split('.');
    const int = intDecArray[0];
    const decs = intDecArray[1];
    let result = int;
    result += "."
    if (decs) {
        result += (decs.substr(0, 2)) ? decs.substr(0, 2).padEnd(2, "0") : "00"
        result += ","
        result += (decs.substr(2, 3)) ? decs.substr(2, 3).padEnd(3, "0") : "000"
        result += ","
        result += (decs.substr(5, 3)) ? decs.substr(5, 3).padEnd(3, "0") : "000"
    } else {
        result += "00,000,000"
    }
    return result
}

export function fromSats(valueInsats: number): string {
    if (!Number.isInteger(valueInsats)) {
      throw new TypeError(errors.SATS_NOT_INT_ERR)
    }
    // convert satoshis to bitcoin
    return fromBitcoin(valueInsats / 1e8)
}

export function fromBits(valueInBip176Bits: number): string {
    if (!Number.isInteger(valueInBip176Bits)) {
        const decs = valueInBip176Bits.toString().split('.')[1];
        if (decs.length > 2) {
            throw new TypeError(errors.BITS_PRECISION_ERR)
        }
    }
    // convert bits to bitcoin
    return fromBitcoin(valueInBip176Bits / 1e6)
}