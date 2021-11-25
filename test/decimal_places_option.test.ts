import {testData} from "./test_data/spec";
import satcomma from "../ts_src/index";

// tests for fromBitcoin()
testData.fromBitcoinDecimalPlaces.forEach((assertTriple, index) => {
    test(`Test input ${index}: ${assertTriple[0]}, with function fromBitcoin() using set of decimalPlaces - ${assertTriple[2]}`, () => {
        const validateBitcoinMaxSupply = (assertTriple[2] > 8) ? false : true;
        expect(satcomma.fromBitcoin(assertTriple[0], {decimalPlaces: assertTriple[2], validateBitcoinMaxSupply: validateBitcoinMaxSupply})).toBe(assertTriple[1]);
    })
})

// tests for fromSats()
testData.fromSatsDecimalPlaces.forEach((assertTriple, index) => {
    test(`Test input ${index}: ${assertTriple[0]}, with function fromSats() using set of decimalPlaces - ${assertTriple[2]}`, () => {
        const validateBitcoinMaxSupply = (assertTriple[2] > 8) ? false : true;
        expect(satcomma.fromSats(assertTriple[0], {decimalPlaces: assertTriple[2], validateBitcoinMaxSupply: validateBitcoinMaxSupply})).toBe(assertTriple[1]);
    })
})

// tests for fromBits()
testData.fromBitsDecimalPlaces.forEach((assertTriple, index) => {
    const validateBitcoinMaxSupply = (assertTriple[2] > 8) ? false : true;
    test(`Test input ${index}: ${assertTriple[0]}, with function fromBits() using set of decimalPlaces - ${assertTriple[2]}`, () => {
        expect(satcomma.fromBits(assertTriple[0], {decimalPlaces: assertTriple[2], validateBitcoinMaxSupply: validateBitcoinMaxSupply})).toBe(assertTriple[1]);
    })
})