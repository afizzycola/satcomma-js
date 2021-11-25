import {testData} from "./test_data/spec";
import satcomma from "../ts_src/index";


// tests for fromBitcoin()
testData.fromBitcoinNoValidation.forEach((assertPair, index) => {
    test(`Test input ${index}: ${assertPair[0]}, with function fromBitcoin() with no bitcoin supply validation`, () => {
        expect(satcomma.fromBitcoin(assertPair[0], {validateBitcoinMaxSupply: false})).toBe(assertPair[1]);
    })
})

// tests for fromSats()
testData.fromSatsNoValidation.forEach((assertPair, index) => {
    test(`Test input ${index}: ${assertPair[0]}, with function fromSats() with no bitcoin supply validation`, () => {
        expect(satcomma.fromSats(assertPair[0], {validateBitcoinMaxSupply: false})).toBe(assertPair[1]);
    })
})

// tests for fromBits()
testData.fromBitsNoValidation.forEach((assertPair, index) => {
    test(`Test input ${index}: ${assertPair[0]}, with function fromBits() with no bitcoin supply validation`, () => {
        expect(satcomma.fromBits(assertPair[0], {validateBitcoinMaxSupply: false})).toBe(assertPair[1]);
    })
})
