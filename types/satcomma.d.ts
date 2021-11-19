interface options {
    rhsDelimiter?: string;
    lhsDelimiter?: string;
    validateBitcoinMaxSupply?: boolean;
}
export declare function fromBitcoin(valueInBitcoin: number, { lhsDelimiter, rhsDelimiter, validateBitcoinMaxSupply }?: options): string;
export declare function fromSats(valueInSats: number, { lhsDelimiter, rhsDelimiter, validateBitcoinMaxSupply }?: options): string;
export declare function fromBits(valueInBip176Bits: number, { lhsDelimiter, rhsDelimiter, validateBitcoinMaxSupply }?: options): string;
export {};
