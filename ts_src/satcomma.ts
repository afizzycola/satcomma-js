import errors from "./errors";
// we use the big.js library to avoid floating point errors with large numbers
import Big from "big.js";


const MAX_SATOSHIS = 2100000000000000;
function checkMaxSatoshis (satoshis: number): void {
    const absSatoshis = Math.abs(satoshis)
    if (absSatoshis > MAX_SATOSHIS || absSatoshis < 0) {
        throw new TypeError(errors.SATS_RANGE_ERR)
    }
}

interface options {
    decimalDelimiter?: string,
    integerDelimiter?: string,
    validateBitcoinMaxSupply?: boolean
    decimalPlaces?: number
}

export function fromBitcoin(valueInBitcoin: number, {integerDelimiter = '', decimalDelimiter = ',', validateBitcoinMaxSupply = true, decimalPlaces = 8}: options = {}): string {
    // convert bitcoin to sats
    const valueInSats = new Big(valueInBitcoin).times(Math.pow(10,decimalPlaces)).toNumber()
    return fromSats(valueInSats, {integerDelimiter, decimalDelimiter, validateBitcoinMaxSupply, decimalPlaces})
}


export function fromSats(valueInSats: number,  {integerDelimiter = '', decimalDelimiter = ',', validateBitcoinMaxSupply = true, decimalPlaces = 8}: options = {}): string {
    // error checking
    if (decimalPlaces < 1) throw new TypeError(errors.ZERO_DECIMAL_PLACES_ERR)
    if (!Number.isInteger(decimalPlaces)) throw new TypeError(errors.DECIMAL_PLACE_OPTION_NOT_INT_ERR)
    if (!Number.isInteger(valueInSats)) throw new TypeError(errors.SATS_NOT_INT_ERR)
    if (validateBitcoinMaxSupply) checkMaxSatoshis(valueInSats)

    const isNegative = valueInSats < 0;
    if (isNegative) valueInSats = -valueInSats;

    const valueInSatsString = new Big(valueInSats).toFixed(0)
    
    // using toLocalString risks .0 being returned where the decimal value equal.
    // To prevent this we prefix a 1 to ensure a satcomma formatted output
    // this is later sliced before returning the result
    const decimalString = 1 + valueInSatsString.slice(-decimalPlaces).padStart(decimalPlaces, '0');
    const integerString = valueInSatsString.slice(0, -decimalPlaces) || '0';
    const delimitedDecimalStringUncorrected =  BigInt(decimalString).toLocaleString('en-US').replace(/,/g, decimalDelimiter)
    const delimitedIntegerString =  BigInt(integerString).toLocaleString('en-US').replace(/,/g, integerDelimiter)
    const delimitedDecimalString = delimitedDecimalStringUncorrected.slice(1)
    const sign = isNegative ? '-': "" 
    return `${sign}${delimitedIntegerString}.${delimitedDecimalString}`
}

export function fromBits(valueInBip176Bits: number,  {integerDelimiter = '', decimalDelimiter = ',', validateBitcoinMaxSupply = true, decimalPlaces = 8}: options = {}): string {
    if (!Number.isInteger(valueInBip176Bits)) {
        const decs = valueInBip176Bits.toString().split('.')[1];
        if (decs.length > 2) {
            throw new TypeError(errors.BITS_PRECISION_ERR)
        }
    }
    // convert bits to sats
    const valueInSats = new Big(valueInBip176Bits).times(100).toNumber()
    return fromSats(valueInSats, {integerDelimiter, decimalDelimiter, validateBitcoinMaxSupply, decimalPlaces})
}


// console.log(fromSats(21, {decimalPlaces: 32}))