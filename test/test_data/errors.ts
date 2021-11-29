import errors from "../../ts_src/errors"

// first element is the 1st argument of function being tested
// 2nd is expected error. If undefined, no error expected
// 3nd is options argument
type AssertTuple = [
    number, //1st argument of function being tested
    string | undefined, //expected error. If undefined, no error expected
    object? // 2nd argument of function - options
]

interface ErrorTestDataTemplate {
    fromBitcoin: Array<AssertTuple>;
    fromSats: Array<AssertTuple>;
    fromBits: Array<AssertTuple>;
}


export const errorTestData: ErrorTestDataTemplate = {
    fromBitcoin: [
        [-1, undefined],
        [-1, undefined, {validateBitcoinMaxSupply: false}],
        [0, undefined],
        [1, undefined],
        [20_999_999, undefined],
        [21_000_000, undefined],
        [21_000_001, errors.SATS_RANGE_ERR],
        [21_000_001, undefined, {validateBitcoinMaxSupply: false}],
        [21e6, undefined],
        [211e6, errors.SATS_RANGE_ERR],
        [211e6, undefined, {validateBitcoinMaxSupply: false}],
        [20_999_999, errors.ZERO_DECIMAL_PLACES_ERR, {decimalPlaces: 0}],
        [20_999_999, errors.DECIMAL_PLACE_OPTION_NOT_INT_ERR, {decimalPlaces: 4.4}],
        [20_999_999, errors.DECIMAL_PLACE_OPTION_NOT_INT_ERR, {decimalPlaces: 1.1}],
    ],
    fromSats: [
        [-1, undefined],
        [-1, undefined, {validateBitcoinMaxSupply: false}],
        [0, undefined],
        [1, undefined],
        [20_999_999_00_000_000, undefined],
        [21_000_000_00_000_000, undefined],
        [21_000_001_00_000_000, errors.SATS_RANGE_ERR],
        [21_000_001_00_000_000, undefined, {validateBitcoinMaxSupply: false}],
        [1.1, errors.SATS_NOT_INT_ERR],
        [1e-2, errors.SATS_NOT_INT_ERR],
        [20_999_999_00_000_000, errors.ZERO_DECIMAL_PLACES_ERR, {decimalPlaces: 0}],
        [20_999_999_00_000_000, errors.DECIMAL_PLACE_OPTION_NOT_INT_ERR, {decimalPlaces: 4.4}],
        [20_999_999_00_000_000, errors.DECIMAL_PLACE_OPTION_NOT_INT_ERR, {decimalPlaces: 1.1}],
    ],
    fromBits: [
        [-1, undefined],
        [-1, undefined, {validateBitcoinMaxSupply: false}],
        [0, undefined],
        [1, undefined],
        [20_999_999_000_000, undefined],
        [21_000_000_000_000, undefined],
        [21_000_001_000_000, errors.SATS_RANGE_ERR],
        [21_000_001_000_000, undefined, {validateBitcoinMaxSupply: false}],
        [1.1, undefined],
        [1.11, undefined],
        [1.111, errors.BITS_PRECISION_ERR],
        [1.1111, errors.BITS_PRECISION_ERR],
        [20_999_999, errors.ZERO_DECIMAL_PLACES_ERR, {decimalPlaces: 0}],
        [20_999_999, errors.DECIMAL_PLACE_OPTION_NOT_INT_ERR, {decimalPlaces: 4.4}],
        [20_999_999, errors.DECIMAL_PLACE_OPTION_NOT_INT_ERR, {decimalPlaces: 1.1}],
    ],
};