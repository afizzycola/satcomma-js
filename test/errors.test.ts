import {errorTestData} from "./test_data";
import satcomma from "../ts_src/index";


// error tests for fromBitcoin()
errorTestData.fromBitcoin.forEach((assertPair, index) => {
    test(`Test input: ${assertPair[0]}, array index ${index}, with function fromBitcoin()`, () => {
        if (assertPair[1] !== undefined) {
            expect(() => satcomma.fromBitcoin(assertPair[0])).toThrowError(new TypeError(assertPair[1]));
        } else {
            expect(() => satcomma.fromBitcoin(assertPair[0])).not.toThrow();
        }
    })
})

// error tests for fromSats()
errorTestData.fromSats.forEach((assertPair, index) => {
    test(`Test input: ${assertPair[0]}, array index ${index}, with function fromSats()`, () => {
        if (assertPair[1] !== undefined) {
            expect(() => satcomma.fromSats(assertPair[0])).toThrowError(new TypeError(assertPair[1]));
        } else {
            expect(() => satcomma.fromSats(assertPair[0])).not.toThrow();
        }
    })
})

// error tests for fromBits()
errorTestData.fromBits.forEach((assertPair, index) => {
    test(`Test input: ${assertPair[0]}, array index ${index}, with function fromBits()`, () => {
        if (assertPair[1] !== undefined) {
            expect(() => satcomma.fromBits(assertPair[0])).toThrowError(new TypeError(assertPair[1]));
        } else {
            expect(() => satcomma.fromBits(assertPair[0])).not.toThrow();
        }
    })
})