import {errorTestData} from "./test_data/errors";
import satcomma from "../ts_src/index";


// error tests for fromBitcoin()
errorTestData.fromBitcoin.forEach((assertTuple, index) => {
    test(`Error Test. Input: ${assertTuple[0]}, array index ${index}, with function fromBitcoin()`, () => {
        if (assertTuple[1] !== undefined) {
            expect(() => satcomma.fromBitcoin(assertTuple[0], assertTuple[2])).toThrowError(new TypeError(assertTuple[1]));
        } else {
            expect(() => satcomma.fromBitcoin(assertTuple[0], assertTuple[2])).not.toThrow();
        }
    })
})

// error tests for fromSats()
errorTestData.fromSats.forEach((assertTuple, index) => {
    test(`Error Test. Input: ${assertTuple[0]}, array index ${index}, with function fromSats()`, () => {
        if (assertTuple[1] !== undefined) {
            expect(() => satcomma.fromSats(assertTuple[0], assertTuple[2])).toThrowError(new TypeError(assertTuple[1]));
        } else {
            expect(() => satcomma.fromSats(assertTuple[0], assertTuple[2])).not.toThrow();
        }
    })
})

// error tests for fromBits()
errorTestData.fromBits.forEach((assertTuple, index) => {
    test(`Error Test. Input: ${assertTuple[0]}, array index ${index}, with function fromBits()`, () => {
        if (assertTuple[1] !== undefined) {
            expect(() => satcomma.fromBits(assertTuple[0], assertTuple[2])).toThrowError(new TypeError(assertTuple[1]));
        } else {
            expect(() => satcomma.fromBits(assertTuple[0], assertTuple[2])).not.toThrow();
        }
    })
})