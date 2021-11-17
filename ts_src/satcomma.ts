import errors from "./errors";


const MAX_SATOSHIS = 21000000 * 1e8;
function checkMaxSatoshis (satoshis: number): void {
  if (satoshis > MAX_SATOSHIS || satoshis < 0) {
    throw new TypeError(errors.SATS_RANGE_ERR)
  }
}

interface options {
    rhsDelimiter?: string,
    lhsDelimiter?: string,
    validateBitcoinMaxSupply?: boolean
}

export function fromBitcoin(valueInBitcoin: number | BigInt, {lhsDelimiter = '', rhsDelimiter = ',', validateBitcoinMaxSupply = true}: options = {}): string {

    if (validateBitcoinMaxSupply) {
        checkMaxSatoshis(valueInBitcoin * 1e8);
    }
    const intDecArray = valueInBitcoin.toFixed(8)
        .toString()
        .split('.');
    const int: number = parseInt(intDecArray[0]);
    const decs: string = intDecArray[1];
    let result: string = int.toLocaleString('en-US').replace(/,/g, lhsDelimiter); // we use en-US locale to set the default as a comma
    result += "."
    if (decs) {
        result += (decs.substr(0, 2)) ? decs.substr(0, 2).padEnd(2, "0") : "00"
        result += rhsDelimiter
        result += (decs.substr(2, 3)) ? decs.substr(2, 3).padEnd(3, "0") : "000"
        result += rhsDelimiter
        result += (decs.substr(5, 3)) ? decs.substr(5, 3).padEnd(3, "0") : "000"
    } else {
        result += `00${rhsDelimiter}000${rhsDelimiter}000`
    }
    return result
}

export function fromSats(valueInSats: number | BigInt,  {lhsDelimiter = '', rhsDelimiter = ',', validateBitcoinMaxSupply = true}: options = {}): string {
    if (!Number.isInteger(valueInSats)) {
      throw new TypeError(errors.SATS_NOT_INT_ERR)
    }
    // convert satoshis to bitcoin
    return fromBitcoin(valueInSats * 1e-8, {lhsDelimiter, rhsDelimiter, validateBitcoinMaxSupply})
}

export function fromBits(valueInBip176Bits: number | BigInt,  {lhsDelimiter = '', rhsDelimiter = ',', validateBitcoinMaxSupply = true}: options = {}): string {
    if (!Number.isInteger(valueInBip176Bits)) {
        const decs = valueInBip176Bits.toString().split('.')[1];
        if (decs.length > 2) {
            throw new TypeError(errors.BITS_PRECISION_ERR)
        }
    }
    // convert bits to bitcoin
    return fromBitcoin(valueInBip176Bits / 1e6, {lhsDelimiter, rhsDelimiter, validateBitcoinMaxSupply})
}