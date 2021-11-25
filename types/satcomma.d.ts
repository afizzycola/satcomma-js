interface options {
    decimalDelimiter?: string;
    integerDelimiter?: string;
    validateBitcoinMaxSupply?: boolean;
    decimalPlaces?: number;
}
export declare function fromBitcoin(valueInBitcoin: number, { integerDelimiter, decimalDelimiter, validateBitcoinMaxSupply, decimalPlaces }?: options): string;
export declare function fromSats(valueInSats: number, { integerDelimiter, decimalDelimiter, validateBitcoinMaxSupply, decimalPlaces }?: options): string;
export declare function fromBits(valueInBip176Bits: number, { integerDelimiter, decimalDelimiter, validateBitcoinMaxSupply, decimalPlaces }?: options): string;
export {};
