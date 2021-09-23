import {testData} from "./test_data";
import satcomma from "../ts_src/index";


// tests for fromBitcoin()
testData.fromBitcoin.forEach(assertPair => {
    test(`Test input: ${assertPair[0]}, with function fromBitcoin()`, () => {
        expect(satcomma.fromBitcoin(assertPair[0])).toBe(assertPair[1]);
    })
})

// tests for fromSats()
testData.fromSats.forEach(assertPair => {
    test(`Test input: ${assertPair[0]}, with function fromSats()`, () => {
        expect(satcomma.fromSats(assertPair[0])).toBe(assertPair[1]);
    })
})

// tests for fromBits()
testData.fromBits.forEach(assertPair => {
    test(`Test input: ${assertPair[0]}, with function fromBits()`, () => {
        expect(satcomma.fromBits(assertPair[0])).toBe(assertPair[1]);
    })
})